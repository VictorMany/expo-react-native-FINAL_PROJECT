import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import DataComponent from '../components/DataComponents/DataComponent';
import firebase from '../utils/firebase';
import 'firebase/firestore'

const DataPage = ({ route }) => {

    return (
        <View style={{ backgroundColor: '#396371' }}>
            <DataComponent user={route.params.user} />
        </View >
    )
}
export default DataPage


// 