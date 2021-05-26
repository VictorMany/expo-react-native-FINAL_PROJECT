import React from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function FileComponent(props) {
    const { Nombre, TipoSangre, Edad, Medicamentos, EnfermedadesCronicas, Alergias } = props;
    return (
        <View style={{ flexDirection: "column", height: '100%', width: '100%' }}>
            <View style={{ flexDirection: "row", height: '20%', width: '100%' }}>
                <View style={{ flexDirection: "column", height: '100%', width: '25%', backgroundColor: '#A1C8D2' }}>
                    <Image source={require('../../img/expediente.png')}
                        style={{ width: '90%', height: '90%', borderRadius: 30, alignSelf: 'center', marginVertical: 5 }}
                    />
                </View>
                <View style={{ flexDirection: "column", height: '100%', width: '75%', backgroundColor: '#A1C8D2', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>Expediente Médico</Text>
                    <TouchableOpacity style={{
                        height: '40%', width: '70%', alignContent: 'center', alignItems: "center",
                        justifyContent: "center", alignSelf: 'center', borderRadius: 23, backgroundColor: "#2BA147"
                    }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlignVertical: 'center', fontSize: 20, textAlign: 'center' }}>Actualizar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: "row", height: '110%', width: '100%', backgroundColor: '#396371', padding: 20 }}>
                <View style={{ flexDirection: "column", height: '100%', width: '100%', backgroundColor: '#A1C8D2', borderRadius: 20, padding: 5 }}>
                    <Text style={styles.textLeft}>Nombre Completo</Text>
                    <TextInput style={styles.textRight} value={Nombre}></TextInput>
                    <Text style={styles.textLeft}>Tipo de sangre</Text>
                    <TextInput style={styles.textRight} value={TipoSangre}></TextInput>
                    <Text style={styles.textLeft}>Edad</Text>
                    <TextInput style={styles.textRight} value={Edad}></TextInput>
                    <Text style={styles.textLeft}>Medicamentos</Text>
                    <TextInput style={styles.textRight} value={Medicamentos}></TextInput>
                    <Text style={styles.textLeft}>Enfermedades Crónicas</Text>
                    <TextInput style={styles.textRight} value={EnfermedadesCronicas}></TextInput>
                    <Text style={styles.textLeft}>Alergias</Text>
                    <TextInput style={styles.textRight} value={Alergias}></TextInput>
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
        color: '#4B4B4B',
        marginVertical: '1%',
        backgroundColor: '#708C96C7',
        borderRadius: 5
    },

    img: {
        borderRadius: 20
    }
});
