import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, TextInput } from 'react-native';
import firebase from '../../utils/firebase';
import 'firebase/firestore'

export default function DataComponent(props) {

    const [actualizar, setActualizar] = useState(false)
    const { user } = props
    const [doc, setDoc] = useState({})

    //Variable auxiliar de mi form
    var form = {}
    const actualizarData = () => {
        try {
            if (actualizar) {
                var formActualizado = { ...doc, ...form }
                //Si nuestro actualizar es true, entonces actualizamos nuestros datos
                console.log("Se actualizaron los datos")
                firebase.firestore().collection('usuarios').doc(user.uid).update({
                    nombre: formActualizado.nombre,
                    correo: formActualizado.email,
                    carrera: formActualizado.carrera,
                    semestre: formActualizado.semestre,
                    edad: formActualizado.edad,
                });
            }
            setActualizar(!actualizar)
        } catch (error) {
            console.log("Error al actualizar", error)
        }
    };

    useEffect(() => {
        firebase.firestore().collection('usuarios').doc(user.uid)
            .get()
            .then(form => {
                var forma = {
                    nombre: '',
                    carrera: '',
                    email: '',
                    semestre: '',
                    edad: ''
                }

                forma = { ...forma, ...form.data() }
                setDoc(forma);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [user, actualizar]);

    const onChangeText = (value, param) => {
        switch (param) {
            case "nombre":
                form.nombre = value;
                break;
            case "carrera":
                form.carrera = value;
                break;
            case "semestre":
                form.semestre = value;
                break;
            case "edad":
                form.edad = value;
                break;
            case "correo":
                form.correo = value;
                break;
            default:
                break;
        }
        console.log(form)
    }

    return (
        <View style={{ flexDirection: "column", height: '100%', width: '100%' }}>
            <View style={{ flexDirection: "row", height: 80, width: '100%' }}>
                <View style={{ flexDirection: "column", height: '100%', width: '25%', backgroundColor: '#A1C8D2' }}>
                    <Image source={require('../../img/datos.png')}
                        style={{ width: '90%', height: '90%', borderRadius: 30, alignSelf: 'center', marginVertical: 5 }}
                    />
                </View>
                <View style={{ flexDirection: "column", height: '100%', width: '75%', backgroundColor: '#A1C8D2', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>Datos de la Cuenta</Text>
                    <TouchableOpacity onPress={() => { actualizarData() }} style={{
                        height: '40%', width: '70%', alignContent: 'center', alignItems: "center",
                        justifyContent: "center", alignSelf: 'center', borderRadius: 23, backgroundColor: "#2BA147"
                    }}>
                        {
                            actualizar
                                ?
                                <Text style={{ color: 'white', fontWeight: 'bold', textAlignVertical: 'center', fontSize: 20, textAlign: 'center' }}>Actualizar</Text>
                                :
                                <Text style={{ color: 'white', fontWeight: 'bold', textAlignVertical: 'center', fontSize: 20, textAlign: 'center' }}>Editar perfil</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>

            {
                actualizar ?
                    <View style={{ flexDirection: "row", height: '110%', width: '100%', backgroundColor: '#396371', padding: 20 }}>
                        <View style={{ flexDirection: "column", height: '100%', width: '100%', backgroundColor: '#A1C8D2', borderRadius: 8, padding: 5, overflow: 'scroll' }}>
                            <Text style={styles.textLeft}>Nombre</Text>
                            <TextInput style={styles.textRight} defaultValue={doc.nombre} onChange={(e) => {
                                onChangeText(e.nativeEvent.text, 'nombre')
                            }}></TextInput>
                            <Text style={styles.textLeft}>Carrera</Text>
                            <TextInput style={styles.textRight} defaultValue={doc.carrera} onChange={(e) => {
                                onChangeText(e.nativeEvent.text, 'carrera')
                            }}></TextInput>
                            <Text style={styles.textLeft}>Semestre</Text>
                            <TextInput style={styles.textRight} defaultValue={doc.semestre} onChange={(e) => {
                                onChangeText(e.nativeEvent.text, 'semestre')
                            }}></TextInput>
                            <Text style={styles.textLeft}>Edad</Text>
                            <TextInput style={styles.textRight} defaultValue={doc.edad} onChange={(e) => {
                                onChangeText(e.nativeEvent.text, 'edad')
                            }}></TextInput>
                        </View>
                    </View>
                    :
                    <View style={{ flexDirection: "row", height: '110%', width: '100%', backgroundColor: '#396371', padding: 20 }}>
                        <View style={{ flexDirection: "column", height: '100%', width: '100%', backgroundColor: '#A1C8D2', borderRadius: 8, padding: 5, overflow: 'scroll' }}>
                            <Text style={styles.textLeft}>Nombre</Text>
                            <Text style={styles.textRight} >{doc.nombre}</Text>
                            <Text style={styles.textLeft}>Carrera</Text>
                            <Text style={styles.textRight}>{doc.carrera}</Text>
                            <Text style={styles.textLeft}>Semestre</Text>
                            <Text style={styles.textRight}>{doc.semestre}</Text>
                            <Text style={styles.textLeft}>Correo</Text>
                            <Text style={styles.textRight} >{doc.email}</Text>
                            <Text style={styles.textLeft}>Edad</Text>
                            <Text style={styles.textRight}>{doc.edad}</Text>
                        </View>
                    </View>
            }
        </View >
    );



}

const styles = StyleSheet.create({

    text: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#396371',
        textAlignVertical: 'center',
        marginLeft: 12
    },
    textLeft: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#534646',
        marginVertical: '1%',
        padding: 3,
        marginLeft: 12
    },
    textRight: {
        fontSize: 16,
        color: '#4B4B4B',
        padding: 10,
        marginVertical: '1%',
        backgroundColor: '#A3E5FFC7',
        borderRadius: 5
    },

    img: {
        borderRadius: 20
    }
});
