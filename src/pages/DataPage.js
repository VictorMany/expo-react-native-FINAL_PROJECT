import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import DataComponent from '../components/DataComponents/DataComponent';
import firebase from '../utils/firebase';
import 'firebase/firestore'

const DataPage = () => {
    const [user, setUser] = useState('');
    useEffect(() => {
        firebase.auth().onAuthStateChanged((response) => {
            setUser(response);
            console.log('Consulto cosas')
        });
    })

    return (
        <View style={{ backgroundColor: '#396371' }}>
            <DataComponent user={user} />
        </View >
    )
}
export default DataPage


// 