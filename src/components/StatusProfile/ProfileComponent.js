import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, Alert, Switch, TextInput } from 'react-native';
import firebase from '../../utils/firebase';
import 'firebase/firestore'


export default function ProfileComponent({ route }) {


    //Ya están
    const [actualizar, setActualizar] = useState(false)
    const [arr, setArr] = useState([])
    const [formulario, setFormulario] = useState({})
    const [user, setUser] = useState('');

    var form = {
        estatus: false,
    }

    const actualizarData = async () => {
        //console.log(form);
        try {
            if (actualizar) {
                var formActualizado = { ...formulario, ...form }
                //Si nuestro actualizar es true, entonces actualizamos nuestros datos
                //console.log("Se actualizaron los datos")
                //console.log(formActualizado);

                if (formActualizado.id) {
                    formActualizado.estatus = formulario.estatus
                    console.log(formulario)
                    await firebase.firestore().collection('estado_salud').doc('IdXiTtKd8LaNFq6IVZ3HlBg5G5z1').collection('estado_salud').doc(formulario.id).set(formActualizado);
                }
                else {
                    await firebase.firestore().collection('estado_salud').doc('IdXiTtKd8LaNFq6IVZ3HlBg5G5z1').collection('estado_salud').doc().set(formActualizado);
                }
            }
            setActualizar(!actualizar)
            setFormulario({})
        } catch (error) {
            //console.log("Error al actualizar", error)
        }
    };

    const onChangeText = (value, param) => {
        switch (param) {
            case "pregunta":
                form.pregunta = value;
                break;
            default:
                break;
        }
        //console.log(form)
        //setFormulario(form.pregunta)
    }

    //Ya está
    useEffect(() => {
        setUser(route.params.user);
        //console.log(response)


        var arreglo = []
        firebase.firestore().collection('estado_salud').doc('IdXiTtKd8LaNFq6IVZ3HlBg5G5z1').collection('estado_salud')
            .get()
            .then(array => {
                // forma = { ...forma, ...form.data() }
                array.forEach(doc => {
                    var obj = { ...doc.data() };
                    obj.id = doc.id;
                    arreglo.push(obj);
                })
                if (arreglo.length > 0) {
                    setArr(arreglo); //console.log("arr", arr) 
                }
            })
            .catch((error) => {
                //console.log(error)
            })
    }, [user, actualizar]);

    //Alert
    const createTwoButtonAlert = () =>
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed')
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        );

    return (
        <View style={{ flexDirection: "column", height: '100%', width: '100%', backgroundColor: '#396371' }}>
            <View style={{ flexDirection: "row", height: 80, width: '100%' }}>
                <View style={{ flexDirection: "column", height: '100%', width: '25%', backgroundColor: '#A1C8D2' }}>
                    <Image source={require('../../img/estado.jpg')}
                        style={{ width: '90%', height: '90%', borderRadius: 30, alignSelf: 'center', marginVertical: 5 }}
                    />
                </View>
                <View style={{ flexDirection: "column", height: '100%', width: '75%', backgroundColor: '#A1C8D2', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>Mi estado de salud</Text>
                    {
                        //Si nuestro usuario tiene privilegios de administrador
                        user.uid === 'IdXiTtKd8LaNFq6IVZ3HlBg5G5z1'
                            ?
                            <TouchableOpacity onPress={() => { actualizarData() }} style={{
                                height: '40%', width: '70%', alignContent: 'center', alignItems: "center",
                                justifyContent: "center", alignSelf: 'center', borderRadius: 23, backgroundColor: "#2BA147"
                            }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', textAlignVertical: 'center', fontSize: 20, textAlign: 'center' }} >{actualizar && formulario.pregunta ? 'Actualizar' : 'Agregar'}</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => createTwoButtonAlert} style={{
                                height: '40%', width: '70%', alignContent: 'center', alignItems: "center",
                                justifyContent: "center", alignSelf: 'center', borderRadius: 23, backgroundColor: "#2BA147"
                            }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', textAlignVertical: 'center', fontSize: 20, textAlign: 'center' }} >Guardar cambios</Text>
                            </TouchableOpacity>
                    }
                </View>
            </View>
            <View style={{ flexDirection: "row", height: '87%', width: '100%', backgroundColor: '#396371', padding: 10 }}>
                <View style={{ flexDirection: "column", height: '100%', width: '100%', backgroundColor: '#A1C8D2', borderRadius: 10, padding: 5, overflow: 'scroll' }}>
                    {
                        actualizar
                            ?
                            <View style={{ flexDirection: "column", height: '100%', minHeight: 500, width: '100%', backgroundColor: '#A1C8D2', borderRadius: 9, padding: 5, overflow: 'scroll' }}>
                                <Text style={styles.textLeft}>Pregunta</Text>
                                <TextInput style={[styles.textRight2, { height: '80%' }]} multiline={true} defaultValue={formulario.pregunta} onChange={(e) => {
                                    onChangeText(e.nativeEvent.text, 'pregunta')
                                }}></TextInput>
                            </View>
                            :
                            <CardList user={user} arr={arr} setForm={setFormulario} setActualizar={(() => { setActualizar(!actualizar) })}></CardList>
                    }
                </View>
            </View>
        </View >
    );
}

function CardList(props) {
    const { arr, setForm, setActualizar, user } = props;
    //console.log(arr)
    var numbers = arr
    const sayHi = (a) => {
        setForm(a)
        setActualizar()
    }
    //console.log(numbers)
    const listItems = numbers.map((a, index) =>
        // Correcto! La key debería ser especificada dentro del array.
        <View key={index}>
            <CardQuestions setText={(() => { sayHi(a) })} pregunta={a.pregunta} estatus={a.estatus} id={a.id} user={user} />
        </View>
    );
    return (
        <View>
            {listItems}
        </View>
    );
}


function CardQuestions(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = async (id, estatus, pregunta) => {
        var form = {
            estatus: !isEnabled,
            pregunta: pregunta
        }
        //console.log(form)
        setIsEnabled(previousState => !previousState);
        try {
            await firebase.firestore().collection('estado_salud').doc('IdXiTtKd8LaNFq6IVZ3HlBg5G5z1').collection('estado_salud').doc(id).set(form);
            //console.log(form)
        } catch (error) {
            //console.log(error)
        }
    }
    const { pregunta, estatus, setText, id, user } = props;

    useEffect(() => {
        setIsEnabled(estatus)
        //console.log(pregunta);
    }, [props])


    return (
        <View style={{ flexDirection: "row", height: 'auto', width: '100%', backgroundColor: '#141313', borderRadius: 20, marginTop: 10 }} >
            <View style={{ flexDirection: "column", width: '20%', height: '100%', alignContent: 'center', alignItems: 'center', alignSelf: 'center', paddingVertical: '12%' }}>
                <Switch
                    trackColor={{ false: "#727272", true: "#FFFFFF" }}
                    thumbColor={isEnabled ? "#727272" : "#FFFFFF"}
                    onValueChange={() => toggleSwitch(id, estatus, pregunta)}
                    value={isEnabled}
                />
            </View>
            {
                user.uid === 'IdXiTtKd8LaNFq6IVZ3HlBg5G5z1' ?
                    < TouchableOpacity onPress={() => { setText() }} style={{ flexDirection: "column", width: '80%', height: '100%', padding: 10, alignContent: 'center', backgroundColor: '#222020', borderTopRightRadius: 20, borderBottomRightRadius: 20, alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={[styles.textRight, { height: '100%' }]} multiline={true} >{pregunta}</Text>
                    </TouchableOpacity>
                    :
                    <View style={{ flexDirection: "column", width: '80%', height: '100%', padding: 10, alignContent: 'center', backgroundColor: '#222020', borderTopRightRadius: 20, borderBottomRightRadius: 20, alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={[styles.textRight, { height: '100%' }]} multiline={true} >{pregunta}</Text>
                    </View>
            }
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
    textRight: {
        fontSize: 18,
        width: '100%',
        color: '#FFFFFF',
        marginVertical: '1%',
        borderRadius: 5,
        padding: 10,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    textLeft: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#534646',
        marginVertical: '1%',
        padding: 3,
        marginLeft: 12
    },
    textRight2: {
        fontSize: 16,
        color: '#4B4B4B',
        padding: 10,
        marginVertical: '1%',
        backgroundColor: '#A3E5FFC7',
        borderRadius: 5,
    },

    img: {
        borderRadius: 20
    }
});
