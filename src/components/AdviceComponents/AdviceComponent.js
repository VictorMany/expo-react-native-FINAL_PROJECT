import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import CardAdviceComponent from './CardAdviceComponent'
import firebase from '../../utils/firebase';
import 'firebase/firestore'

export default function AdviceComponent(props) {
    const [imgs, setImages] = useState([
        require('../../img/mascarilla.png'),
        require('../../img/manos.jpg'),
        require('../../img/consejos.png'),
        require('../../img/expediente.png'),
    ]);

    //Ya están
    const [actualizar, setActualizar] = useState(false)
    const { user } = props
    const [arr, setArr] = useState([])

    const [formulario, setFormulario] = useState({})
    //Ya estan
    var form = {}
    const onChangeText = (value, param) => {
        switch (param) {
            case "titulo":
                form.titulo = value;
                break;
            case "consejo":
                form.consejo = value;
                break;
            case "imagen":
                form.imagen = value;
                break;

            default:
                break;
        }
        console.log(form)
    }

    const actualizarData = async () => {
        console.log(formulario);
        try {
            if (actualizar) {
                var formActualizado = { ...formulario, ...form }
                //Si nuestro actualizar es true, entonces actualizamos nuestros datos
                console.log("Se actualizaron los datos")
                console.log(formActualizado);
                await firebase.firestore().collection('consejo').doc(formActualizado.id).set(formActualizado);
            }
            setActualizar(!actualizar)
        } catch (error) {
            console.log("Error al actualizar", error)
        }
    };

    //Ya está
    useEffect(() => {
        var arreglo = []
        firebase.firestore().collection('consejo')
            .get()
            .then(array => {
                // forma = { ...forma, ...form.data() }
                array.forEach(doc => {
                    var obj = { ...doc.data() };
                    obj.id = doc.id;
                    arreglo.push(obj);
                })
                if (arreglo.length > 0) { setArr(arreglo); console.log("arr", arr) }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [user, actualizar]);


    return (
        <View style={{ flexDirection: "column", height: '100%', width: '100%' }}>
            <View style={{ flexDirection: "row", height: 80, width: '100%' }}>
                <View style={{ flexDirection: "column", height: '100%', width: '25%', backgroundColor: '#AFB9BB' }}>
                    <Image source={require('../../img/consejos.png')}
                        style={{ width: '90%', height: '90%', borderRadius: 30, alignSelf: 'center', marginVertical: 5 }}
                    />
                </View>
                <View style={{ flexDirection: "column", height: '100%', width: '75%', backgroundColor: '#AFB9BB', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>Consejos</Text>
                    {
                        user.uid == 'IdXiTtKd8LaNFq6IVZ3HlBg5G5z1'
                            ?
                            <TouchableOpacity onPress={() => { actualizarData() }} style={{
                                height: '40%', width: '70%', alignContent: 'center', alignItems: "center",
                                justifyContent: "center", alignSelf: 'center', borderRadius: 23, backgroundColor: "#878865"
                            }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', textAlignVertical: 'center', fontSize: 20, textAlign: 'center' }}>{actualizar ? 'Actualizar' : 'Agregar'}</Text>
                            </TouchableOpacity>
                            :
                            <View></View>
                    }
                </View>
            </View >
            

            <View style={{ flexDirection: "row", height: '90%', minHeight: 500, width: '100%', backgroundColor: '#121618', padding: 10 }}>
                {
                    actualizar
                        ?
                        <View style={{ flexDirection: "row", height: '95%', width: '100%', backgroundColor: '#121618', overflow: 'scroll' }}>
                            <View style={{ flexDirection: "column", height: '100%', minHeight: 500, width: '100%', backgroundColor: '#AFB9BB', borderRadius: 9, padding: 10, overflow: 'scroll' }}>
                                <Text style={styles.textLeft}>Título</Text>
                                <TextInput style={styles.textRight} defaultValue={formulario.titulo} onChange={(e) => {
                                    onChangeText(e.nativeEvent.text, 'titulo')
                                }}></TextInput>
                                <Text style={styles.textLeft}>Consejo</Text>
                                <TextInput style={[styles.textRight, { height: '75%', textAlignVertical: 'top' }]} multiline={true} defaultValue={formulario.consejo} onChange={(e) => {
                                    onChangeText(e.nativeEvent.text, 'consejo')
                                }}></TextInput>
                            </View>
                        </View>
                        :
                        <View style={{ flexDirection: "column", height: '100%', width: '100%', backgroundColor: '#AFB9BB', borderRadius: 20, padding: 5, paddingTop: 0 }}>
                            {
                                arr.length > 0
                                    ?
                                    <ScrollView>
                                        <CardList arr={arr} setForm={setFormulario} setActualizar={(() => { setActualizar(!actualizar) })} user={user} />
                                    </ScrollView>
                                    :
                                    <View></View>
                            }
                        </View>
                }
            </View>
        </View >
    );
}

function CardList(props) {
    const { arr, setForm, setActualizar, user } = props;
    console.log(arr)
    var numbers = arr
    const sayHi = (a) => {
        setForm(a)
        setActualizar()
    }
    console.log(numbers)
    const listItems = numbers.map((a, index) =>
        // Correcto! La key debería ser especificada dentro del array.
        <View key={index}>
            <CardAdviceComponent setText={(() => { sayHi(a) })} title={a.titulo} description={a.consejo} numero={index + 1} user={user} />
        </View>
    );
    return (
        <View>
            {listItems}
        </View>
    );
}

const styles = StyleSheet.create({

    text: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#121618',
        textAlignVertical: 'center',
        marginLeft: 12
    },
    textLeft: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#534646',
        marginVertical: '1%',
        padding: 3,
        marginLeft: 12
    },
    textRight: {
        fontSize: 16,
        color: '#4B4B4B',
        padding: 10,
        marginVertical: '1%',
        backgroundColor: '#E3E8EBC7',
        borderRadius: 5,
    },

    img: {
        borderRadius: 20
    }
});
