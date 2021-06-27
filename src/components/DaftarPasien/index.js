import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {faTimes, faEdit} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const DaftarPasien = ({id, pasienItem, navigation, removeData}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('ListPasien', {id: id})}>
      <View>
        <Image source={require('./../../assets/pasien.png')} />
        <Text style={styles.nama}>{pasienItem.nama}</Text>
        <Text style={styles.noRuang}>Room: {pasienItem.nomorRuang}</Text>
        <Text style={styles.DPJP}>Dokter: {pasienItem.DPJP}</Text>
        <Text style={styles.task}>Task: {pasienItem.task}</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon icon={faEdit} color={'orange'} size={25} onPress={() => navigation.navigate('EditPasien', {id: id})}/>
      </View>
      <View>
        <FontAwesomeIcon icon={faTimes} color={'red'} size={25} onPress={() => removeData(id)}/>
      </View>
    </TouchableOpacity>
  );
};

export default DaftarPasien;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginLeft: 12,
    width: 140,
    height: 180,
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
    fontSize: 14,
    alignItems: 'center',
  },
  noRuang: {
    fontSize: 12,
    color: 'gray',
    alignItems: 'center',
  },
  DPJP: {
    fontSize: 12,
    color: 'gray',
    alignItems: 'center',
  },
  task: {
    fontSize: 12,
    color: 'gray',
    alignItems: 'center',
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 12,
  },
});
