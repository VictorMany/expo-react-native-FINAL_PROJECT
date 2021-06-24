import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';


export default function CardAsistanceComponent(props) {
    const { nombre, calle, numero, setText, user } = props;
    
    if(user.uid === 'IdXiTtKd8LaNFq6IVZ3HlBg5G5z1')
    
    return (
        <TouchableOpacity style={{ flexDirection: "row", height: 100, width: '100%', backgroundColor: '#141313', borderRadius: 20, marginTop: 10, overflow: 'scroll' }} onPress={() => { setText() }}>
            <View style={{ flexDirection: "column", width: '100%', height: '100%', padding: 10 }}>
                <Text style={styles.text}>{nombre}</Text>
                <Text style={styles.textDetail}>{calle}</Text>
                <Text style={styles.textDetail}>{numero}</Text>
            </View>
        </TouchableOpacity>
    );
    else{
        return (
            <View style={{ flexDirection: "row", height: 100, width: '100%', backgroundColor: '#141313', borderRadius: 20, marginTop: 10, overflow: 'scroll' }}>
                <View style={{ flexDirection: "column", width: '100%', height: '100%', padding: 10 }}>
                    <Text style={styles.text}>{nombre}</Text>
                    <Text style={styles.textDetail}>{calle}</Text>
                    <Text style={styles.textDetail}>{numero}</Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        padding: 1
    },
    textDetail: {
        fontSize: 12,
        color: 'grey',
        padding: 1
    },
});