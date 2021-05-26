import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, Alert, Switch } from 'react-native';

export default function ProfileComponent(props) {
    const { Nombre, Carrera, Semestre, Username, Correo, Contraseña } = props;
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const createTwoButtonAlert = () =>
        Alert.alert(
            "Estatus actualizado",
            "Hemos detectado que tienes una posibilidad (BAJA) de portar covid 19",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"


                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
        );
    return (
        <View style={{ flexDirection: "column", height: '100%', width: '100%' }}>
            <View style={{ flexDirection: "row", height: '13%', width: '100%' }}>
                <View style={{ flexDirection: "column", height: '100%', width: '25%', backgroundColor: '#A1C8D2' }}>
                    <Image source={require('../../img/estado.jpg')}
                        style={{ width: '90%', height: '90%', borderRadius: 30, alignSelf: 'center', marginVertical: 5 }}
                    />
                </View>
                <View style={{ flexDirection: "column", height: '100%', width: '75%', backgroundColor: '#A1C8D2', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>Mi estado de salud</Text>
                    <TouchableOpacity style={{
                        height: '40%', width: '70%', alignContent: 'center', alignItems: "center",
                        justifyContent: "center", alignSelf: 'center', borderRadius: 23, backgroundColor: "#2BA147"
                    }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlignVertical: 'center', fontSize: 20, textAlign: 'center' }} onPress={createTwoButtonAlert}>Aceptar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: "row", height: '87%', width: '100%', backgroundColor: '#396371', padding: 20 }}>
                <View style={{ flexDirection: "column", height: '100%', width: '100%', backgroundColor: '#A1C8D2', borderRadius: 20, padding: 5, overflow: 'scroll' }}>
                    <Text style={styles.textLeft}>Has estado en alguna de las siguientes situaciones en los ultimos 5 dias</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text style={styles.textRight}>Contacto sin portar cubrebocas con personal de salud expuesto a covid 19</Text>
                    <Text style={styles.textRight}>Lugar cerrrado con alta concentración de personas (ej. Cine, Restaurante)</Text>

                    <Text style={styles.textLeft}>¿Tienes temperatura corporal mayor a 37.5 ºC?</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text style={styles.textLeft}>¿Te duele la garganta y o tienes tos seca?</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text style={styles.textLeft}>¿Tienes dificultad para respirar?</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text style={styles.textLeft}>¿Tienes dolor de cabeza o malestar general?</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

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
        fontSize: 18,
        color: '#4B4B4B',
        marginVertical: '1%',
        marginHorizontal: 50,
        backgroundColor: '#708C964F',
        borderRadius: 5, padding: 10
    },

    img: {
        borderRadius: 20
    }
});
