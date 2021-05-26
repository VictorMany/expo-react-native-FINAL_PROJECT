import React, { useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import CardAsistanceComponent from './CardAsistanceComponent';

export default function AsistanceComponent(props) {
    const [NombreHospital, setNombreHospital] = useState([
        'Hospital Regional de León',
        'IMSS T21',
        'Angeles'
    ]);
    const [Direccion, setDireccion] = useState([
        'Cima del Sol, #123, Campestre',
        'Mariano Escobedo, #143, Lomas de la Arbide',
        'López Mateos, #345, Centro',
    ]);
    const [Telefono, setTelefono] = useState([
        '456 564 3456',
        '477 345 3456',
        '477 897 3456'
    ]);


    return (
        <View style={{ flexDirection: "column", height: '100%', width: '100%' }}>

            <View style={{ flexDirection: "row", height: '18%', width: '100%' }}>
                <View style={{ flexDirection: "column", height: '100%', width: '25%', backgroundColor: '#A1C8D2' }}>
                    <Image source={require('../../img/asistencia.png')}
                        style={{ width: '90%', height: '90%', borderRadius: 30, alignSelf: 'center', marginVertical: 5 }}
                    />
                </View>
                <View style={{ flexDirection: "column", height: '100%', width: '75%', backgroundColor: '#A1C8D2', paddingVertical: 28 }}>
                    <Text style={styles.text}>Asistencia</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", height: '120%', width: '100%', backgroundColor: '#396371', padding: 20 }}>
                <View style={{ flexDirection: "column", height: '100%', width: '100%', backgroundColor: '#A1C8D2', borderRadius: 20, padding: 5 }}>
                    <CardAsistanceComponent nombre={NombreHospital[0]} calle={Direccion[0]} numero={Telefono[0]}></CardAsistanceComponent>
                    <CardAsistanceComponent nombre={NombreHospital[1]} calle={Direccion[1]} numero={Telefono[1]}></CardAsistanceComponent>
                    <CardAsistanceComponent nombre={NombreHospital[2]} calle={Direccion[2]} numero={Telefono[2]}></CardAsistanceComponent>
                </View>
            </View>
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
        fontSize: 20,
        color: '#534646',
        marginVertical: '1%',
        marginLeft: 12
    },
    textRight: {
        fontSize: 20,
        color: '#534646',
        marginVertical: '1%',
        marginLeft: 12
    },

    img: {
        borderRadius: 20
    }
});
