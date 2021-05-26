import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import AdviceComponent from '../components/AdviceComponents/AdviceComponent';
import AsistanceComponent from '../components/AsistanceComponents/AsistanceComponent';



const AdvicePage = () => {

    const [nombreHospital, setNombreHospital] = useState('Hospital General de lEON');
    const [direccion, setDireccion] = useState('Calle 20 de Enero 927, Obregón.');
    const [telefono, setTelefono] = useState('477 719 7100');
    
    return (
        <View>
            <AdviceComponent NombreHospital={nombreHospital} Direccion={direccion} Telefono={telefono}></AdviceComponent>
        </View >
    )
}


export default AdvicePage