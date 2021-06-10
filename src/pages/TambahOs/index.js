import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Alert, ScrollView} from 'react-native';
import {InputData} from '../../components';
import FIREBASE from '../../config/FIREBASE'

export default class TambahOs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      nomorRuang: '',
      scedule: '',
      DPJP: '',
      visite: '',
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if(this.state.nama && this.state.nomorRuang && this.state.scedule && this.state.DPJP && this.state.visite) {
      
      const pasienReferensi = FIREBASE.database().ref('pasien');
      const pasien = {
        nama: this.state.nama,
        nomorRuang: this.state.nomorRuang,
        scedule: this.state.scedule,
        DPJP: this.state.DPJP,
        visite: this.state.visite,
      }

      pasienReferensi
        .push(pasien)
        .then((data) => {
          Alert.alert('Sukses', 'Data Pasien Tersimpan');
          this.props.navigation.replace('Home');
        })
        .catch((error) => {
          console.log("Error : ", error);
        })


      }else {
        Alert.alert('Error', 'Nama Pasien, No. Ruangan, Scedule Medis, DPJP, dan visite wajib diisi');
      }
      
    };

  render() {
    return (
      <ScrollView style={styles.pages}>
        <InputData
          label="Nama Pasien"
          placeholder="Masukkan Nama"
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama"
        />
         <InputData
          label="No. Ruangan"
          placeholder="Masukkan No. Ruangan"
          keyboardType="number-pad"
          onChangeText={this.onChangeText}
          value={this.state.nomorRuang}
          namaState="nomorRuang"
        />

        <InputData
          label="Scedule Medis"
          placeholder="Masukkan Scedule Medis"
          isTextArea={true}
          onChangeText={this.onChangeText}
          value={this.state.scedule}
          namaState="scedule"
        />

        <InputData
          label="DPJP-consule"
          placeholder="Nama DPJP / Nama Dr. Co"
          isTextArea={true}
          onChangeText={this.onChangeText}
          value={this.state.DPJP}
          namaState="DPJP"
        />

        <InputData
          label="Advice"
          placeholder="Advice dokter/ belum visite"
          isTextArea={true}
          onChangeText={this.onChangeText}
          value={this.state.visite}
          namaState="visite"
        />

        <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
          <Text style={styles.textTombol}>SIMPAN</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  tombol: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

