import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../../utils/firebase';
import 'firebase/firestore'


export default function FileComponent(props) {
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
                console.log(form)
                console.log(doc)
                console.log(formActualizado);
                console.log(user.uid);
                firebase.firestore().collection('expediente').doc(user.uid).set({
                    nombre: formActualizado.nombre,
                    tipoSangre: formActualizado.tipoSangre,
                    medicamentos: formActualizado.medicamentos,
                    enfermedadesCronicas: formActualizado.enfermedadesCronicas,
                    edad: formActualizado.edad,
                    alergias: formActualizado.alergias,
                });
            }
            setActualizar(!actualizar)
        } catch (error) {
            console.log("Error al actualizar", error)
        }
    };

    useEffect(() => {
        firebase.firestore().collection('expediente').doc(user.uid)
            .get()
            .then(form => {
                var forma = {
                    nombre: '',
                    tipoSangre: '',
                    medicamentos: '',
                    enfermedadesCronicas: '',
                    edad: '',
                    alergias: ''
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
            case "tipoSangre":
                form.tipoSangre = value;
                break;
            case "medicamentos":
                form.medicamentos = value;
                break;
            case "edad":
                form.edad = value;
                break;
            case "enfermedadesCronicas":
                form.enfermedadesCronicas = value;
                break;
            case "alergias":
                form.alergias = value;
                break;

            default:
                break;
        }
        console.log(form)
    }



    // { Nombre, TipoSangre, Edad, Medicamentos, EnfermedadesCronicas, Alergias }
    return (
        <View style={{ flexDirection: "column", height: '100%', width: '100%' }}>
            <View style={{ flexDirection: "row", height: 80, width: '100%' }}>
                <View style={{ flexDirection: "column", height: '100%', width: '25%', backgroundColor: '#A1C8D2' }}>
                    <Image source={require('../../img/expediente.png')}
                        style={{ width: '90%', height: '90%', borderRadius: 30, alignSelf: 'center', marginVertical: 5 }}
                    />
                </View>
                <View style={{ flexDirection: "column", height: '100%', width: '75%', backgroundColor: '#A1C8D2', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>Expediente Médico</Text>
                    <TouchableOpacity onPress={() => { actualizarData() }} style={{
                        height: '40%', width: '70%', alignContent: 'center', alignItems: "center",
                        justifyContent: "center", alignSelf: 'center', borderRadius: 23, backgroundColor: "#2BA147"
                    }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlignVertical: 'center', fontSize: 20, textAlign: 'center' }}>Actualizar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {
                actualizar
                    ?
                    <View style={{ flexDirection: "row", height: '110%', width: '100%', backgroundColor: '#396371', padding: 20, overflow: 'scroll' }}>
                        <View style={{ flexDirection: "column", height: '100%', width: '100%', backgroundColor: '#A1C8D2', borderRadius: 9, padding: 5, overflow: 'scroll' }}>
                            <Text style={styles.textLeft}>Nombre Completo</Text>
                            <TextInput style={styles.textRight} defaultValue={doc.nombre} onChange={(e) => {
                                onChangeText(e.nativeEvent.text, 'nombre')
                            }}></TextInput>
                            <Text style={styles.textLeft}>Tipo de sangre</Text>
                            <TextInput style={styles.textRight} defaultValue={doc.tipoSangre} onChange={(e) => {
                                onChangeText(e.nativeEvent.text, 'tipoSangre')
                            }}></TextInput>
                            <Text style={styles.textLeft}>Edad</Text>
                            <TextInput style={styles.textRight} defaultValue={doc.edad} onChange={(e) => {
                                onChangeText(e.nativeEvent.text, 'edad')
                            }}></TextInput>
                            <Text style={styles.textLeft}>Medicamentos</Text>
                            <TextInput style={styles.textRight} defaultValue={doc.medicamentos} onChange={(e) => {
                                onChangeText(e.nativeEvent.text, 'medicamentos')
                            }}></TextInput>
                            <Text style={styles.textLeft}>Enfermedades Crónicas</Text>
                            <TextInput style={styles.textRight} defaultValue={doc.enfermedadesCronicas} onChange={(e) => {
                                onChangeText(e.nativeEvent.text, 'enfermedadesCronicas')
                            }}></TextInput>
                            <Text style={styles.textLeft}>Alergias</Text>
                            <TextInput style={styles.textRight} defaultValue={doc.alergias} onChange={(e) => {
                                onChangeText(e.nativeEvent.text, 'alergias')
                            }}></TextInput>
                        </View>
                    </View>
                    :
                    <View style={{ flexDirection: "row", height: '110%', width: '100%', backgroundColor: '#396371', padding: 20, overflow: 'scroll' }}>
                        <View style={{ flexDirection: "column", height: '100%', width: '100%', backgroundColor: '#A1C8D2', borderRadius: 9, padding: 5, overflow: 'scroll' }}>
                            <Text style={styles.textLeft}>Nombre Completo</Text>
                            <Text style={styles.textRight}>{doc.nombre}</Text>
                            <Text style={styles.textLeft}>Tipo de sangre</Text>
                            <Text style={styles.textRight} >{doc.tipoSangre}</Text>
                            <Text style={styles.textLeft}>Edad</Text>
                            <Text style={styles.textRight} >{doc.edad}</Text>
                            <Text style={styles.textLeft}>Medicamentos</Text>
                            <Text style={styles.textRight} >{doc.medicamentos}</Text>
                            <Text style={styles.textLeft}>Enfermedades Crónicas</Text>
                            <Text style={styles.textRight} >{doc.enfermedadesCronicas}</Text>
                            <Text style={styles.textLeft}>Alergias</Text>
                            <Text style={styles.textRight}>{doc.alergias}</Text>
                        </View>
                    </View>
            }
        </View>
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
        borderRadius: 5,
    },

    img: {
        borderRadius: 20
    }
});
