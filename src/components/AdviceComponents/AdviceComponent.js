import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import CardAdviceComponent from './CardAdviceComponent'

export default function AdviceComponent(props) {
    const [title, setTitle] = useState([
        'Usar mascarilla',
        'Lavarse las manos',
        'Llorar mucho porque ya es jueves'
    ]);
    const [description, setDescription] = useState([
        'Las mascarillas se deben usar además de mantener una distancia de al menos6 pies, especialmente si está conpersonas que no viven con usted',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys tandard dummy text ever since the',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys tandard dummy text ever since the',

    ]);
    const [imgs, setImages] = useState([
        require('../../img/mascarilla.png'),
        require('../../img/manos.jpg'),
        require('../../img/consejos.png'),
        require('../../img/expediente.png'),
    ]);


    
    return (
        <View style={{ flexDirection: "column", height: '100%', width: '100%' }}>
            <View style={{ flexDirection: "row", height: '15%', width: '100%' }}>
                <View style={{ flexDirection: "column", height: '100%', width: '25%', backgroundColor: '#A1C8D2' }}>
                    <Image source={require('../../img/consejos.png')}
                        style={{ width: '90%', height: '90%', borderRadius: 30, alignSelf: 'center', marginVertical: 5 }}
                    />
                </View>
                <View style={{ flexDirection: "column", height: '100%', width: '75%', backgroundColor: '#A1C8D2', paddingVertical: 28 }}>
                    <Text style={styles.text}>Consejos</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", height: '100%', width: '100%', backgroundColor: '#396371', padding: 20 }}>
                <View style={{ flexDirection: "column", height: '100%', width: '100%', backgroundColor: '#A1C8D2', borderRadius: 20, padding: 5 }}>
                    <CardAdviceComponent img={imgs[0]} title={title[0]} description={description[0]}></CardAdviceComponent>
                    <CardAdviceComponent img={imgs[1]} title={title[1]} description={description[1]}></CardAdviceComponent>
                    <CardAdviceComponent img={imgs[2]} title={title[2]} description={description[2]}></CardAdviceComponent>
                </View>
            </View>


        </View >
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
