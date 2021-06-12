import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import FileComponent from '../components/FileComponents/FileComponent';
import firebase from '../utils/firebase';
import 'firebase/firestore'


const FilePage = ({ route }) => {

    return (
        <View>
            <FileComponent user={route.params.user}></FileComponent>
        </View >
    )
}


export default FilePage

