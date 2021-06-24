import React, { useState } from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import { validateEmail } from "../utils/validation";
import firebase from '../utils/firebase';
import 'firebase/firestore'

const RegisterPage = ({ navigation }) => {
    const [formData, setFormData] = useState(defaultValue);
    const [formError, setFormError] = useState({});

    const register = () => {
        let error = {};
        if (formData.email == "" || formData.password == "" || formData.nombre == "" || formData.edad == "") {
            if (formData.nombre == "") { error.nombre = true; console.log("Aqui va el error", error) }
            if (formData.edad == "") { error.edad = true; console.log(error) }
            console.log("Aqui está el form data del email", formData.email)

        }
        if (!validateEmail(formData.email)) {
            console.log('error de email')
            error.email = true;
        }
        if (formData.password.length < 6) {
            console.log('error de contraseña')
            error.password = true;
        }
        else {
            try {
                firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
                    .then(cred => {
                        firebase.firestore().collection('usuarios').doc(cred.user.uid).set({
                            edad: formData.edad,
                            nombre: formData.nombre,
                            email: formData.email,
                            carrera: 'Carrera',
                            semestre: 'Semestre actual'
                        }).then(() => {
                            navigation.replace('HomePage')
                        }).catch(err => {
                            console.log(err);
                        });
                    }).catch(err => {
                        console.log(err);
                        setFormError({
                            email: true,
                            password: true,
                            nombre: true,
                            edad: true,
                        });
                    });
            } catch (error) {
                console.log(error);
            }
        }
        setFormError(error);
    }

    return (
        <View style={{ backgroundColor: "#FFF", height: "100%" }}>
            <Image source={require('../img/perfil.png')}
                style={{ width: 200, height: 200, alignSelf: 'center' }}
            />
            <Text
                style={{
                    fontSize: 30,

                    alignSelf: "center",
                    fontWeight: 'bold',
                    marginTop: 10,
                    color: '#121618'
                }}
            >Registro</Text>

            <View style={[styles.viewContainer, formError.nombre && styles.errorInput]}>
                <TextInput
                    placeholder="Nombre"
                    placeholderTextColor="#121618"
                    style={[styles.textInputt]}
                    onChange={(e) => setFormData({ ...formData, nombre: e.nativeEvent.text })}
                />
            </View>

            <View style={[styles.viewContainer, formError.edad && styles.errorInput]}
            >
                <TextInput
                    placeholder="Edad"
                    keyboardType="numeric"
                    placeholderTextColor="#121618"
                    onChange={(e) => setFormData({ ...formData, edad: e.nativeEvent.text })}
                    style={[styles.textInputt]}
                />
            </View>

            <View style={[styles.viewContainer, formError.email && styles.errorInput]}>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#121618"
                    onChange={(e) => setFormData({ ...formData, email: e.nativeEvent.text })}
                    style={[styles.textInputt]}
                />
            </View>


            <View style={[styles.viewContainer, formError.password && styles.errorInput]}
            >

                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#121618"
                    onChange={(e) => setFormData({ ...formData, password: e.nativeEvent.text })}
                    style={[styles.textInputt]}

                ></TextInput>
            </View>


            <View

                style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30,
                    backgroundColor: "#121618",
                    paddingVertical: 10,
                    borderRadius: 23,
                }}>
                <Text
                    onPress={register}
                    style={{
                        color: "white",
                        height: 40,
                        textAlignVertical: 'center',
                        fontWeight: 'bold',
                        width: '100%',
                        textAlign: 'center'
                    }}>Register</Text>
            </View>
        </View>
    )
}

function defaultValue() {
    return {
        email: "",
        password: "",
        nombre: "",
        edad: "",
    }
}

const styles = StyleSheet.create({
    viewContainer:
    {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 55,
        borderWidth: 2,
        marginTop: 20,
        paddingHorizontal: 10,
        borderColor: "#121618",
        borderRadius: 23,
        paddingVertical: 2
    },
    textInputt:
        { width: '100%' },

    container: {
        width: '80%',
        height: '40%'
    },
    textoIzquiera: {
        fontWeight: 'bold',
        color: 'white'
    },
    button: {
        backgroundColor: 'orange',
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
        borderColor: "#CA1818",
        borderWidth: 2
    },

});




export default RegisterPage