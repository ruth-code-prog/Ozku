import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants';
import { IconHome, IconHomeActive, IconInformasi, IconInformasiActive, IconObat, IconObatActive} from './../../assets'

const TabItem = ({label, isFocused, onLongPress, onPress}) => {

    const Icon = () =>{
        if(label === "Home") {
            return isFocused ? <IconHomeActive/> : <IconHome />;
        }
        if(label === "Informasi") {
            return isFocused ? <IconInformasiActive/> : <IconInformasi />;
        }
        if(label === "Obat") {
            return isFocused ? <IconObatActive/> : <IconObat />;
        }
    }
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.containerFocus : styles.container}>
          <Icon />
          {isFocused && <Text style={styles.text}>
          {label.toUpperCase()}</Text>}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        padding: 5,
        width: '33%',
        alignItems: 'center',
    },
    containerFocus: {
        alignContent: 'center',
        padding: 5,
        flexDirection: 'row',
        width: '33%',
        alignItems: 'center',
    },
    text: {
        color: WARNA_UTAMA,
     
        marginLeft: 8,
    }
});
