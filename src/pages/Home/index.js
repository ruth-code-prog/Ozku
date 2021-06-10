import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Alert, ScrollView, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faUser} from '@fortawesome/free-solid-svg-icons';
import FIREBASE from '../../config/FIREBASE';
import DaftarPasien from '../../components/DaftarPasien';
import Dokter from '../Dokter'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pasiens: [],
      pasiensKey: [],
    };
  }

  componentDidMount() {
    this.ambilData();
  }

  ambilData = () => {
    FIREBASE.database()
      .ref('pasien')
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let pasienItem = {...data};

        this.setState({
          pasiens: pasienItem,
          pasiensKey: Object.keys(pasienItem),
        });
      });
  };

  removeData = (id) => {
    Alert.alert(
      'Info',
      'Anda yakin akan menghapus Data Pasien ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            FIREBASE.database()
              .ref('pasien/' + id)
              .remove();
            this.ambilData();
            Alert.alert('Hapus', 'Sukses Hapus Data');
          },
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    const {pasiens, pasiensKey} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Daftar Pasien</Text>
          <View style={styles.garis} />
          <View>
          <View style={styles.wrapperUser}>
              <TouchableOpacity
                style={styles.btnTambah}
                onPress={() => this.props.navigation.navigate('TambahOs')}>
                <FontAwesomeIcon icon={faUser} size={20} color={'white'} />
              </TouchableOpacity>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
              {pasiensKey.length > 0 ? (
                pasiensKey.map((key) => (
                  <DaftarPasien
                    key={key}
                    pasienItem={pasiens[key]}
                    id={key}
                    {...this.props}
                    removeData={this.removeData}
                  />
                ))
              ) : (
                <Text>Daftar Kosong</Text>
              )}
              </View>
            </ScrollView>
          </View>
          </View>
          <Text style={styles.subtitle}>Daftar Dokter</Text>
          <View style={styles.garis} />
            <Dokter />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  garis: {
    borderWidth: 1,
    marginTop: 10,
  },
  listPasien: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  wrapperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  wrapperScroll: {marginHorizontal: -16, paddingRight: 10, paddingLeft: 10},
  category: {flexDirection: 'row'},
  btnTambah: {
    padding: 20,
    backgroundColor: 'skyblue',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
