import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, DetailPasien, EditPasien, ListPasien,TambahOs } from '../pages'

const Stack = createStackNavigator();

const Router = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="DetailPasien" component={DetailPasien}  options={{ title: 'Detail Pasien' }} />
        <Stack.Screen name="EditPasien" component={EditPasien}  options={{ title: 'Edit Scedule Pasien' }}/>
        <Stack.Screen name="ListPasien" component={ListPasien}  options={{ title: 'List Pasien' }}/>
        <Stack.Screen name="TambahOs" component={TambahOs}   options={{ title: 'Tambah Pasien' }}/>
      </Stack.Navigator>
    )
}

export default Router
