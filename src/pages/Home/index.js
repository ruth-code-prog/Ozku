import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faUser} from '@fortawesome/free-solid-svg-icons';
import FIREBASE from '../../config/FIREBASE';
import DaftarPasien from '../../components/DaftarPasien';
import Headline from '../Headline';
import Imt from '../Imt';
import Carousel from '../Carousel';
import RunningText from '../RunningText';
import Notif from '../Notif';
import InputData from '../../components/InputData';
import Developer from '../Developer';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pasiens: [],
      originalPasiens: [],
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
        let arr = [];

        Object.entries(data).map((val) => {
          arr.push({
            id: val[0],
            nama: val[1]?.nama,
            dpjp: val[1]?.DPJP,
            nomorRuang: val[1]?.namaRuang,
            scedule: val[1]?.scedule,
            task: val[1]?.task,
          });
        });

        this.setState({
          pasiens: arr,
          originalPasiens: arr,
        });
      });
  };

  onSearchPatient = (_, searchValue) => {
    let arr = [...this.state.originalPasiens];
    var searchRegex = new RegExp(searchValue, 'i');
    arr = arr.filter((item) => searchRegex?.test(item?.nama?.toLowerCase()));
    console.log(arr);
    this.setState({
      pasiens: arr,
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
    const {pasiens} = this.state;
    
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <RunningText />
          <Carousel />
          <Text style={styles.title}>Daftar Pasien</Text>
          <InputData
              placeholder={'Cari Pasien'}
              placeholderColor={'white'}
              onChangeText={this.onSearchPatient}
            />
          <View>
            <View style={styles.wrapperUser}>
              <TouchableOpacity
                style={styles.btnTambah}
                onPress={() => this.props.navigation.navigate('TambahOs')}>
                <FontAwesomeIcon icon={faUser} size={20} color={'white'} />
                <View>
                  <FontAwesomeIcon
                    style={styles.plus}
                    icon={faPlus}
                    size={18}
                    color={'white'}
                  />
                  <Text style={styles.text}>TAMBAH PASIEN</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.wrapperScroll}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.category}>
                    {pasiens.length > 0 ? (
                      pasiens.map((item, key) => (
                        <DaftarPasien
                          key={key}
                          pasienItem={item}
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
          <Text style={styles.subtitle}>Headline Info</Text>
          <Headline />
          <Imt />
          <Notif />
          <Developer />
        </ScrollView>
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
    paddingTop: 8,
    marginBottom: 80,
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
    marginTop: 0,
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
    marginLeft: 14,
    color: "#FFFFFF"
  },
  text: {
    marginTop: -20,
    marginLeft: 80,
    color: 'white',
    fontSize: 16,
  },
  wrapperScroll: {
    marginHorizontal: -16,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 6,
  },
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
});
