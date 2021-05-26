import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';


export default function CardAdviceComponent(props) {
    const { img, title, description } = props;

    return (
        <View style={{ flexDirection: "row", height: 130, width: '100%', backgroundColor: '#141313', borderRadius: 20, marginTop: 10 }}>
            <View style={{ flexDirection: "column", width: '30%', height: '100%' }}>
                <Image source={img}
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                ></Image>
            </View>
            <View style={{ flexDirection: "column", width: '70%', height: '100%', padding: 10 }}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.textDetail}>{description}</Text>
            </View>
        </View>
    );
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