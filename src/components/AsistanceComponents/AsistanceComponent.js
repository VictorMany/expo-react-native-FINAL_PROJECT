import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, TextInput } from 'react-native';
import CardAsistanceComponent from './CardAsistanceComponent';
import firebase from '../../utils/firebase';
import 'firebase/firestore'


export default function AsistanceComponent(props) {
    const [actualizar, setActualizar] = useState(false)
    const { user } = props
    const [arr, setArr] = useState([])

    const [formulario, setFormulario] = useState({})

    //Variable auxiliar de mi form
    var form = {}
    const onChangeText = (value, param) => {
        switch (param) {
            case "nombre":
                form.nombre = value;
                break;
            case "direccion":
                form.direccion = value;
                break;
            case "telefono":
                form.telefono = value;
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
                await firebase.firestore().collection('asistencia').doc(formActualizado.id).set(formActualizado);
            }
            setActualizar(!actualizar)
        } catch (error) {
            console.log("Error al actualizar", error)
        }
    };

    useEffect(() => {
        var arreglo = []
        firebase.firestore().collection('asistencia')
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
        <View style={{ flexDirection: "column", height: '95%', width: '100%' }}>

            <View style={{ flexDirection: "row", height: 80, width: '100%' }}>
                <View style={{ flexDirection: "column", height: '100%', width: '25%', backgroundColor: '#AFB9BB' }}>
                    <Image source={require('../../img/asistencia.png')}
                        style={{ width: '90%', height: '90%', borderRadius: 30, alignSelf: 'center', marginVertical: 5 }}
                    />
                </View>
                <View style={{ flexDirection: "column", height: '100%', width: '75%', backgroundColor: '#AFB9BB', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>??A d??nde asistir?</Text>
                    {
                        user.uid === 'IdXiTtKd8LaNFq6IVZ3HlBg5G5z1'
                            ?
                            <TouchableOpacity onPress={() => { actualizarData() }} style={{
                                height: '40%', width: '70%', alignContent: 'center', alignItems: "center",
                                justifyContent: "center", alignSelf: 'center', borderRadius: 23, backgroundColor: "#878865"
                            }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', textAlignVertical: 'center', fontSize: 20, textAlign: 'center' }}>{actualizar ? 'Actualizar' : 'Agregar'}</Text>
                            </TouchableOpacity>
                            :
                            <View />
                    }
                </View>
            </View>

            <View style={{ flexDirection: "row", height: '100%', width: '100%', backgroundColor: '#121618', padding: 10 }}>
                {
                    actualizar
                        ?
                        <View style={{ flexDirection: "row", height: '100%', width: '100%', backgroundColor: '#121618', overflow: 'scroll' }}>
                            <View style={{ flexDirection: "column", height: '100%', minHeight: 500, width: '100%', backgroundColor: '#AFB9BB', borderRadius: 9, padding: 5, overflow: 'scroll' }}>
                                <Text style={styles.textLeft}>Centro de asistencia</Text>
                                <TextInput style={styles.textRight} defaultValue={formulario.nombre} onChange={(e) => {
                                    onChangeText(e.nativeEvent.text, 'nombre')
                                }}></TextInput>
                                <Text style={styles.textLeft}>Direcci??n</Text>
                                <TextInput style={styles.textRight} defaultValue={formulario.direccion} onChange={(e) => {
                                    onChangeText(e.nativeEvent.text, 'direccion')
                                }}></TextInput>
                                <Text style={styles.textLeft}>Tel??fono</Text>
                                <TextInput style={styles.textRight} defaultValue={formulario.telefono} onChange={(e) => {
                                    onChangeText(e.nativeEvent.text, 'telefono')
                                }}></TextInput>
                            </View>
                        </View>
                        :

                        <View style={{ flexDirection: "column", minHeight: 500, height: '100%', width: '100%', backgroundColor: '#AFB9BB', borderRadius: 8, padding: 5, paddingTop: 0, overflow: 'scroll' }}>
                            {
                                arr.length > 0
                                    ?
                                    <CardList arr={arr} setForm={setFormulario} setActualizar={(() => { setActualizar(!actualizar) })} user={user}/>
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
        // Correcto! La key deber??a ser especificada dentro del array.
        <View key={index}>
            <CardAsistanceComponent setText={(() => { sayHi(a) })} nombre={a.nombre} calle={a.direccion} numero={a.telefono} user={user} />
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
