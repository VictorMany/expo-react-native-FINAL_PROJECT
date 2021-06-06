import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import FileComponent from '../components/FileComponents/FileComponent';
import firebase from '../utils/firebase';
import 'firebase/firestore'


const FilePage = () => {

    const [user, setUser] = useState('');
    useEffect(() => {
        firebase.auth().onAuthStateChanged((response) => {
            setUser(response);
            console.log('Consulto cosas')
        });
    })
    return (
        <View>
            <FileComponent user={user}></FileComponent>
        </View >
    )
}


export default FilePage

