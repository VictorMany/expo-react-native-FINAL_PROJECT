import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/pages/HomePage';
import AdvicePage from './src/pages/AdvicePage';
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import DataPage from './src/pages/DataPage';
import FilePage from './src/pages/FilePage';
import AsistancePage from './src/pages/AsistancePage';
import ProfileComponent from './src/components/StatusProfile/ProfileComponent';
import firebase from './src/utils/firebase';
import 'firebase/auth'

const Stack = createStackNavigator();

const myApp = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => { setUser(response) });
  }, []);

  if (user === undefined) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'HomePage' : 'LoginPage'}>

        <Stack.Screen name="HomePage" options={{
          title: 'Regreso seguro', headerTintColor: 'white', headerStyle: {
            backgroundColor: '#29444D'
          },
        }} component={HomePage} />

        <Stack.Screen name="LoginPage" options={{
          title: 'Login'
        }} component={LoginPage} />

        <Stack.Screen name="RegisterPage" component={RegisterPage} options={{
          title: 'Registro', headerTintColor: '#29444D'
        }} />
        <Stack.Screen name="Consejos" component={AdvicePage} options={{
          title: 'Consejos', headerTintColor: 'white', headerStyle: {
            backgroundColor: '#29444D'
          },
        }} />
        <Stack.Screen name="Datos" options={{
          title: 'Datos personales', headerTintColor: 'white', headerStyle: {
            backgroundColor: '#29444D'
          },// headerShown: false
        }} component={DataPage} />


        <Stack.Screen name="Expediente" component={FilePage} options={{
          title: 'Expediente Médico', headerTintColor: 'white', headerStyle: { backgroundColor: '#29444D' },
          //headerShown: false
        }} />

        <Stack.Screen name="Asistencia" options={{
          title: 'Asistencia', headerTintColor: 'white', headerStyle: {
            backgroundColor: '#29444D'
          },
        }} component={AsistancePage} />

        <Stack.Screen name="profile" options={{
          title: 'Estatus de hoy', headerTintColor: 'white', headerStyle: {
            backgroundColor: '#29444D'
          },
        }} component={ProfileComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default myApp