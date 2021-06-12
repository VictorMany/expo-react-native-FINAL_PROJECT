import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import AsistanceComponent from '../components/AsistanceComponents/AsistanceComponent';
import firebase from '../utils/firebase';
import 'firebase/firestore'



const AsistancePage = ({ route }) => {

    return (
        <View>
            <AsistanceComponent user={route.params.user}></AsistanceComponent>
        </View >
    )
}


export default AsistancePage
