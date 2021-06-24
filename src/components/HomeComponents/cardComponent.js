import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';


export default function CardComponent(props) {
    const { img, text, action, setText } = props;



    return (
        <TouchableOpacity style={{ borderRadius: 50 }} onPressIn={() => { setText(text) }} onPress={action}>
            <ImageBackground source={img}
                style={{ width: 180, height: 180 }}
            >
                <View style={styles.div}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </ImageBackground>

        </TouchableOpacity>
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
        textAlign: 'center',
        width: '100%',
        height: '100%',
        textAlignVertical: 'center',
        padding: 1
    },
    div: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '90%',
        height: '20%',
        marginTop: 150,
        alignSelf: 'flex-end',
        backgroundColor: '#00000090',
        borderRadius: 5,
        marginHorizontal: 9,
        marginBottom: 10
    },
    img: {
        borderRadius: 20
    }
});