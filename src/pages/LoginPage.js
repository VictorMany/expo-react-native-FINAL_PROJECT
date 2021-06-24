import React, { useEffect, useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native'
import { validateEmail } from "../utils/validation";
import firebase from '../utils/firebase';

const LoginPage = ({ navigation }) => {
    const [formData, setFormData] = useState(defaultValue);
    const [formError, setFormError] = useState({});
    const [color, setColor] = useState("#121618");

    const login = () => {
        let error = {};
        if (!formData.email || !formData.password) {
            console.log("Error 1");
            setColor("#C00A0A")
        } else if (!validateEmail(formData.email)) {
            setColor("#C00A0A")
            console.log("Error 2");
            error.email = true;
        } else {
            setColor("#121618")
            console.log("Esto vale", formData)
            firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
                .then(() => {
                    console.log("ok");
                    navigation.replace('HomePage')
                })
                .catch((error) => {
                    setFormError({
                        email: true,
                        password: true
                    });

                    ToastAndroid.showWithGravityAndOffset(
                        'Ocurrió un error con el inicio de sesión',
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                    )
                });
        }
        setFormError(error);
    };

    const onChange = (e, type) => {
        setColor("#121618")
        setFormData({ ...formData, [type]: e.nativeEvent.text });
    };

    return (
        <>
            <View
                style={{ height: '10%', backgroundColor: 'white' }}></View>
            <View style={{ backgroundColor: "#FFF", height: "100%" }}>
                <Image source={require('../img/image_logo.jpg')}
                    style={{ width: 250, height: 250, borderRadius: 1000, alignSelf: 'center' }}
                />
                <Text
                    style={{
                        fontSize: 30,
                        alignSelf: "center",
                        fontWeight: 'bold',
                        marginTop: 10,
                        color: '#121618'
                    }}
                >Bienvenido !!</Text>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 50,
                    height: 50,
                    paddingHorizontal: 10,
                    borderColor: color,
                    borderRadius: 23,
                }}>

                    <TextInput
                        style={{ width: '100%', height: '100%' }}
                        placeholder="Email"
                        placeholderTextColor="#121618"
                        onChange={(e) => onChange(e, "email")}
                    />
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 20,
                    height: 50,
                    paddingHorizontal: 10,
                    borderColor: color,
                    borderRadius: 23,
                }}>
                    <TextInput
                        placeholder="Contraseña"
                        placeholderTextColor="#121618"
                        style={[formError.password && styles.errorInput], { width: '100%', height: '100%' }}
                        secureTextEntry={true}
                        onChange={(e) => onChange(e, "password")}
                    />
                </View>
                <View style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30,
                    backgroundColor: "#121618",
                    borderRadius: 23
                }}>
                    <TouchableOpacity style={styles.button} onPress={login} >
                        <Text style={styles.text}>Iniciar Sesion</Text>
                    </TouchableOpacity>
                </View>
                <Text
                    onPress={() => navigation.navigate('RegisterPage')}
                    style={{
                        alignSelf: "center",
                        color: "#121618",

                        paddingVertical: 30
                    }}>Registrarme</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 16,
        borderRadius: 20,
        width: '75%',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    errorInput: {
        borderColor: "#940c0c"
    }
});

function defaultValue() {
    return {
        email: "",
        password: ""
    }
}

export default LoginPage