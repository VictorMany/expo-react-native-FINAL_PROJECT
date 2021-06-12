import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';


export default function CardAdviceComponent(props) {
    const { numero, title, description, setText, user } = props;

    if (user.uid == 'IdXiTtKd8LaNFq6IVZ3HlBg5G5z1') {
        return (
            <TouchableOpacity style={{ flexDirection: "row", height: 130, width: '100%', backgroundColor: '#141313', borderRadius: 20, marginTop: 10 }} onPress={() => { setText() }}>
                <View style={{ flexDirection: "column", width: '20%', height: '100%', alignContent: 'center', alignItems: 'center', alignSelf: 'center', paddingVertical: '12%' }}>
                    <Text style={{ fontWeight: 'bold', color: 'orange', fontSize: 44 }}>{numero}</Text>
                </View>
                <View style={{ flexDirection: "column", width: '80%', height: '100%', padding: 10 }}>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.textDetail}>{description}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    else
        return (
            <View style={{ flexDirection: "row", height: 130, width: '100%', backgroundColor: '#141313', borderRadius: 20, marginTop: 10 }} onPress={() => { setText() }}>
                <View style={{ flexDirection: "column", width: '20%', height: '100%', alignContent: 'center', alignItems: 'center', alignSelf: 'center', paddingVertical: '12%' }}>
                    <Text style={{ fontWeight: 'bold', color: 'orange', fontSize: 44 }}>{numero}</Text>
                </View>
                <View style={{ flexDirection: "column", width: '80%', height: '100%', padding: 10 }}>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.textDetail}>{description}</Text>
                </View>
            </View>
        )

}


const styles = StyleSheet.create({
    viewFooter: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'orange',
        padding: 16,
        borderRadius: 20,
        width: '75%',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        padding: 1,

    },

    textDetail: {
        fontSize: 12,
        color: 'grey',
        padding: 1,
        overflow: 'scroll'
    },
});