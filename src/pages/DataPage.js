import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native'
import DataComponent from '../components/DataComponents/DataComponent';


const DataPage = () => {

    const [nombre, setNombre] = useState('Victor Manuel Velazquez Fuentes');
    const [correo, setCorreo] = useState('victor.velazfuyentez@gmail.com');
    const [contrasenia, setContraseña] = useState('12345');
    const [carrera, setCarrera] = useState('ISSC');
    const [semestre, setSemestre] = useState('Sexto');
    const [username, setUsername] = useState('vycmany');

    return (
        <View style={{ backgroundColor: '#396371' }}>
            <DataComponent Nombre={nombre} Correo={correo} Contrasenia={contrasenia} Carrera={carrera} Semestre={semestre} Username={username} />
        </View >
    )
}

export default DataPage

