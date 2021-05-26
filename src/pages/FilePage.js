import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import DataComponent from '../components/DataComponents/DataComponent';
import FileComponent from '../components/FileComponents/FileComponent';
import CardComponent from '../components/HomeComponents/cardComponent';


const FilePage = () => {

    const [nombre, setNombre] = useState('Victor Manuel Velazquez Fuentes');
    const [edad, setEdad] = useState(21);
    const [enefermedades, setEnfermedades] = useState('Diabetes');
    const [medicamentos, setMedicamentos] = useState('Aspirina, Ibuprofeno, Metamizo, Vitamina C');
    const [sangre, setSangre] = useState('0+');
    const [alergias, setAlergias] = useState('Ninguna');

    return (
        <View>
            <FileComponent Nombre={nombre} Edad={edad} TipoSangre={sangre} Medicamentos={medicamentos} EnfermedadesCronicas={enefermedades} Alergias={alergias}></FileComponent>
        </View >
    )
}


export default FilePage

