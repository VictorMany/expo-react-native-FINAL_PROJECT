import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import CardComponent from '../components/HomeComponents/cardComponent';


const HomePage = ({ navigation }) => {
    const [text, setText] = useState('');
    const [imgs, setimages] = useState([
        require('../img/datos.png'),
        require('../img/asistencia.png'),
        require('../img/consejos.png'),
        require('../img/expediente.png'),
    ]);




    useEffect(() => {

    }, [text, imgs]);
    const action = () => navigation.navigate(text);

    return (
        <View style={{ backgroundColor: "#396371", height: "100%" }}>
            <View style={{
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "row",
                padding: 10,
                backgroundColor: '#A1C8D2',
                height: '20%',
                width: '95%',
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 10

            }}>
                <View style={{ width: '35%', height: '100%', padding: 5 }}>
                    <Image source={require('../img/perfil.png')}
                        style={{ width: "100%", height: "100%", borderRadius: 50 }}
                    /></View>
                <View style={[styles.container, {
                    // Try setting `flexDirection` to `"row"`.
                    flexDirection: "row",
                    width: '58%',
                    padding: 10,
                    backgroundColor: "#A1E8D2",
                    borderRadius: 10,
                    margin: 10,
                    height: '79%',
                    marginTop: 15
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
                        <View style={{ flex: 1, }}><Text style={{ color: 'green', fontWeight: 'bold' }}>Bajo</Text></View>
                        <View style={{ flex: 1, }}><Text style={{ color: '#676D69' }}>21/05/2020</Text></View>
                        <View style={{ flex: 1, }}><Text style={{ color: '#676D69' }}>En 24 hrs</Text></View>
                    </View>
                </View>
            </View >

            <View style={{
                flexDirection: "row",
                width: '100%',
                height: '60%',
                marginTop: 5
            }}>
                <View style={styles.containerColumn}>
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
                <View style={styles.containerColumn}>
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
                marginTop: 10,
                backgroundColor: "#29444D",
                alignContent: 'center',
                height: '20%',
                width: '100%'
            }}>
                <TouchableOpacity style={{
                    height: '40%', width: '90%', alignContent: 'center', alignItems: "center",
                    justifyContent: "center", alignSelf: 'center', borderRadius: 23, backgroundColor: "#2BA147", marginBottom: 20
                }} onPress={() => navigation.navigate('profile')}>
                    <Text style={{ color: 'white', fontWeight: 'bold', textAlignVertical: 'center', fontSize: 20, textAlign: 'center' }}>Actualizar mi estado</Text>
                </TouchableOpacity>
            </View>
        </View >
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
        padding: 10,
    },
    containerColumn: {
        flexDirection: "column",
        width: '50%',
        height: '100%',
    }
});


export default HomePage