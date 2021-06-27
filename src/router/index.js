import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, DetailPasien, EditPasien, ListPasien,TambahOs, Informasi, Obat } from '../pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
  <Tab.Navigator tabBarOptions={{showLabel: false}} tabBar={props => <BottomTabNavigator {...props} />}>
    <Tab.Screen  name="Home" component={Home} />
    <Tab.Screen  name="Informasi" component={Informasi} />
    <Tab.Screen  name="Obat" component={Obat} />
  </Tab.Navigator>
  )
}

const Router = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="MainApp" component={MainApp}   options={{ headerShown: false }}/>
        <Stack.Screen name="DetailPasien" component={DetailPasien}  options={{ title: 'Detail Pasien' }} />
        <Stack.Screen name="EditPasien" component={EditPasien}  options={{ title: 'Edit Scedule Pasien' }}/>
        <Stack.Screen name="ListPasien" component={ListPasien}  options={{ title: 'List Pasien' }}/>
        <Stack.Screen name="TambahOs" component={TambahOs}   options={{ title: 'Tambah Pasien' }}/>
      </Stack.Navigator>
    )
}

export default Router
