import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const CardPasien = ({id, pasienItem, navigation, removeData}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DetailPasien', {id: id})}>
      <View>
        <Text style={styles.nama}>{pasienItem.nama}</Text>
        <Text style={styles.noRuang}>No. Kamar : {pasienItem.nomorRuang}</Text>
        <Text style={styles.noRuang}>DPJP / Co : {pasienItem.DPJP}</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon icon={faEdit} color={'orange'} size={25} onPress={() => navigation.navigate('EditPasien', {id: id})}/>
        <FontAwesomeIcon icon={faTimes} color={'red'} size={25} onPress={() => removeData(id)}/>
      </View>
    </TouchableOpacity>
  );
};

export default CardPasien;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  noRuang: {
    fontSize: 12,
    color: 'gray',
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
