import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import CardComponent from '../components/HomeComponents/cardComponent';
import firebase from '../utils/firebase';
import 'firebase/firestore'


const HomePage = ({ navigation }) => {
    const [text, setText] = useState('');

    const [imgs, setimages] = useState([
        require('../img/datos.png'),
        require('../img/asistencia.png'),
        require('../img/consejos.png'),
        require('../img/expediente.png'),
    ]);

    const [user, setUser] = useState('');

    const [resumenSalud, setResumenSalud] = useState({
        riesgo: 'Actualizar',
        validado: 'Actualizar',
        vence: 'Actualizar',
    })

    useEffect(() => {
        firebase.auth().onAuthStateChanged((response) => {
            setUser(response);
            console.log(response)
        });

        if (user) {
            firebase.firestore().collection('estatus').doc(user.uid)
                .get()
                .then(form => {
                    var forma = {
                        riesgo: '',
                        validado: '',
                        vence: '',
                    }

                    forma = { ...forma, ...form.data() }

                    console.log(form.data())
                    if (form.data() != undefined) {
                        setResumenSalud(forma);
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
            console.log(resumenSalud)
        }

    }, [user || resumenSalud]);


    const action = async () => {
        await navigation.navigate(text, { user: user });
    };

    return (


        <ImageBackground source={require('../img/fondo.jpeg')}
            style={{ height: '100%', width: '100%' }}
        >
            <View style={{
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "row",
                padding: 10,
                backgroundColor: '#8EAFB8',
                height: '20%',
                width: '95%',
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 10

            }}>
                <View style={{ width: '35%', padding: 10 }}>
                    <Image source={require('../img/perfil.png')}
                        style={{ width: 95, height: 95, borderRadius: 100 }}
                    /></View>
                {
                    (user) ?
                        user.uid === 'IdXiTtKd8LaNFq6IVZ3HlBg5G5z1'
                            ?
                            <View style={[styles.container, {
                                // Try setting `flexDirection` to `"row"`.
                                flexDirection: "row",
                                width: '58%',
                                padding: 10,
                                backgroundColor: "#BDD8D0",
                                borderRadius: 10,
                                margin: 10,
                                height: '79%',
                                marginTop: 12,
                                textAlign: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }]}>

                                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 25, textAlign: 'center', alignSelf: 'center', alignContent: 'center' }}>ADMINISTRADOR</Text>

                            </View>

                            :
                            <View style={[styles.container, {
                                // Try setting `flexDirection` to `"row"`.
                                flexDirection: "row",
                                width: '58%',
                                padding: 10,
                                backgroundColor: "#BDD8D0",
                                borderRadius: 10,
                                margin: 10,
                                height: '79%',
                                marginTop: 12
                            }]}>
                                <View style={{
                                    // Try setting `flexDirection` to `"row"`.
                                    flexDirection: "column",
                                    width: '50%',
                                }}>
                                    <View style={{ flex: 1, }}><Text style={[styles.textoIzquiera]}>Riesgo</Text></View>
                                    <View style={{ flex: 1, }}><Text style={[styles.textoIzquiera]}>Validado</Text></View>
                                    <View style={{ flex: 1, }}><Text style={[styles.textoIzquiera]}>Vence</Text></View>
                                </View>
                                <View style={{
                                    // Try setting `flexDirection` to `"row"`.
                                    flexDirection: "column",
                                    width: '50%',
                                }}>
                                    <View style={{ flex: 1, }}><Text style={{ color: 'green', fontWeight: 'bold' }}>{resumenSalud.riesgo}</Text></View>
                                    <View style={{ flex: 1, }}><Text style={{ color: '#676D69' }}>{resumenSalud.validado}</Text></View>
                                    <View style={{ flex: 1, }}><Text style={{ color: '#676D69' }}>{resumenSalud.vence}</Text></View>
                                </View>
                            </View>
                        :
                        null
                }
            </View >

            <View style={{
                flexDirection: "row",
                width: '100%',
                height: 450,
                marginTop: 10
            }}>
                <View style={[styles.containerColumn, { paddingLeft: 10 }]}>
                    <View style={styles.container1}>
                        <View style={styles.containerHijo}>
                            <CardComponent text={'Datos'} img={imgs[0]} action={action} setText={setText}></CardComponent>
                        </View>
                    </View>
                    <View style={styles.container1}>
                        <View style={styles.containerHijo}>
                            <CardComponent text={'Asistencia'} img={imgs[1]} action={action} setText={setText}></CardComponent>
                        </View>
                    </View>

                </View>
                <View style={[styles.containerColumn, { paddingRight: 10 }]}>
                    <View style={styles.container1}>
                        <View style={styles.containerHijo}>
                            <CardComponent text={'Consejos'} img={imgs[2]} action={action} setText={setText}></CardComponent>
                        </View>
                    </View>
                    <View style={styles.container1}>
                        <View style={styles.containerHijo}>
                            <CardComponent text={'Expediente'} img={imgs[3]} action={action} setText={setText}></CardComponent>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 0,
                backgroundColor: "#121618",
                alignContent: 'center',
                height: '20%',
                width: '100%'
            }}>
                <TouchableOpacity style={{
                    height: 50, width: '90%', alignContent: 'center', alignItems: "center",
                    justifyContent: "center", alignSelf: 'center', borderRadius: 23, backgroundColor: "#878865", marginBottom: 12
                }} onPress={
                    () => {
                        navigation.replace('profile', { user: user })

                    }

                } >
                    <Text style={{ color: 'white', fontWeight: 'bold', textAlignVertical: 'center', fontSize: 20, textAlign: 'center' }}>Actualizar mi estado</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    height: '40%', width: '100%', alignContent: 'center', alignItems: "center",
                    justifyContent: "center", alignSelf: 'center', backgroundColor: "#2B68A1", marginBottom: -10
                }} onPress={async () => {
                    await navigation.replace('LoginPage');
                    await firebase.auth().signOut().then(() => {
                        console.log("El usuario salió");
                    }).catch(err => {
                        console.log(err);
                    });
                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', textAlignVertical: 'center', fontSize: 20, textAlign: 'center' }}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '40%'
    },
    textoIzquiera: {
        fontWeight: 'bold',
        color: '#514949'
    },
    containerHijo: {
        width: '100%',
        height: '100%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'black'
    },
    container1: {
        width: '100%',
        height: '50%',
        alignContent: 'center',
        padding: 4,
    },
    containerColumn: {
        flexDirection: "column",
        width: '50%',
        height: 430,
    }
});


export default HomePage