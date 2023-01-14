import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './Screen/Login'
import SignUp from './Screen/SignUp';
import Profile from './Screen/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Patty So
const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/> */}
        {/* <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/> */}
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FD"
  },
});