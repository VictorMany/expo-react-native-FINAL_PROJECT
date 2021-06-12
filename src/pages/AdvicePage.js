import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import AdviceComponent from '../components/AdviceComponents/AdviceComponent';
import firebase from '../utils/firebase';
import 'firebase/firestore'




const AdvicePage = ({ route }) => {
    return (
        <View>
            <AdviceComponent user={route.params.user}></AdviceComponent>
        </View >
    )
}


export default AdvicePage