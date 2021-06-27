import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Alert, ScrollView, Image, Dimensions} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faUser} from '@fortawesome/free-solid-svg-icons';
import FIREBASE from '../../config/FIREBASE';
import DaftarPasien from '../../components/DaftarPasien';
import Dokter from '../Dokter';
import Carousel from '../Carousel';
import Video from '../Video';
import RunningText from '../RunningText';
import Drug from '../Drug';
import DosisObat from '../DosisObat';
import DosisObatEmergency from '../DosisObatEmergency';
import Info from '../Info';
import Notif from '../Notif';

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
        <ScrollView showsVerticalScrollIndicator={false}>
        <RunningText />
          <Carousel />
          <Text style={styles.title}>Daftar Pasien</Text>
          <View>
          <View style={styles.wrapperUser}>
              <TouchableOpacity
                style={styles.btnTambah}
                onPress={() => this.props.navigation.navigate('TambahOs')}>
                <FontAwesomeIcon icon={faUser} size={20} color={'white'} />
                <View>
                <FontAwesomeIcon style={styles.plus} icon={faPlus} size={18} color={'white'} />
                <Text style={styles.text}>TAMBAH PASIEN</Text>
                </View>
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
                <Text style={styles.zero}>Daftar Kosong</Text>
              )}
              </View>
            </ScrollView>
          </View>
          </View>
          <Text style={styles.subtitle}>Daftar Dokter</Text>
          <View style={styles.garis} />
            <Dokter />
            <Text style={styles.subtitle}>Rumus Dosis Obat</Text>
            <Video />
            <Text style={styles.subtitle}>Mencari Obat</Text>
            <Drug />
            <Text style={styles.KalkulatorDosisObat}>Kalkulator Dosis Obat</Text>
            <DosisObat />
            <Text style={styles.DosisObatEmergency}>Kalkulator Dosis Obat Emergency</Text>
            <DosisObatEmergency />
             <Text style={styles.news}>Seputar Perawat dan Loker Medis</Text>
            <Info />
            <Notif />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  header: {
    paddingHorizontal: 12,
    paddingTop: 26,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FBFCFC',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FBFCFC',
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
  plus: {
    marginTop: -20,
    marginLeft: 26,
  },
  zero: {
    marginLeft: 14
  },
  text: {
    marginTop: -20,
    marginLeft: 80,
    color: 'white',
    fontSize: 16,
  },
  wrapperScroll: {marginHorizontal: -16, paddingRight: 10, paddingLeft: 10, marginTop: 6},
  category: {flexDirection: 'row'},
  btnTambah: {
    marginTop: 8,
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
  DosisObatEmergency: {
    marginTop: 40,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FBFCFC',
  },
  news: {
    marginTop: 50,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FBFCFC',
  },
  KalkulatorDosisObat: {
    marginTop: 40,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FBFCFC',
  }
});
