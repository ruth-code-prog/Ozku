import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, ListItem, SafeAreaView } from 'react-native';

class SearchFunction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: '',
    };

    this.arrayNew = [
      { name: 'Covid-19 Anti Virus: Oseltamivir 2x75mg, Metisoprinol 3x2' },
      { name: ''},
      { name: 'Covid-19 Vitamin:Prove D 1x1 tab, Zink 1x1 tab, Becom C 1x1 tab ' },
      { name: 'Hipertermi Terapi: Paracetamol: 3x1 tab' },
      { name: 'Rhinitis Alergic Terapi: Rhinos: 2x1 capsul' },
      { name: 'CKD on HD Terapi: Hemapo: 1amp, Larce: 1amp, Neurosanbe: 1amp' },
      { name: 'Acyclovir adalah obat untuk mengatasi infeksi virus, seperti cacar air, cacar ular, serta penyakit herpes. Obat ini tersedia dalam bentuk tablet 200 mg dan 400 mg. Kondisi: Herpes (termasuk herpes kelamin) Dosis: Dewasa: Saat pertama kali terkena, dosisnya adalah 200-400 mg sebanyak 5 kali per hari (setiap 4 jam) selama 5-10 hari. Untuk pencegahan, dosisnya adalah 200-400 mg, 4 kali per hari' },
      { name: 'Acyclovir adalah obat untuk mengatasi infeksi virus, seperti cacar air, cacar ular, serta penyakit herpes. Obat ini tersedia dalam bentuk tablet 200 mg dan 400 mg. Kondisi: Herpes (termasuk herpes kelamin) Dosis: Anak-anak berusia di bawah 2 tahun: Separuh dosis orang dewasa.' },
      { name: 'Acyclovir adalah obat untuk mengatasi infeksi virus, seperti cacar air, cacar ular, serta penyakit herpes. Obat ini tersedia dalam bentuk tablet 200 mg dan 400 mg. Kondisi: Herpes (termasuk herpes kelamin) Dosis: Anak-anak berusia di atas 2 tahun: Sama dengan dosis orang dewasa.' },
      { name: 'Acyclovir, Kondisi Cacar Air, Dosis: Dewasa: 800 mg 4-5 kali per hari selama 5-7 hari, Anak berusia di atas 2 tahun: 20 mg/kgBB sebanyak 4 kali per hari selama 5 hari. Dosis harian maksimal adalah 800 mg.' },
      { name: 'Acyclovir, Kondisi Cacar ular (herpes zoster), Dosis: Dewasa: 800 mg 5 kali per hari selama 7-10 hari.' },
      { name: 'Amlodipine adalah obat darah tinggi atau hipertensi. Tekanan darah yang terkontrol dapat mencegah penyakit stroke, serangan jantung, dan penyakit ginjal. Dosis Untuk mengatasi hipertensi: Dewasa: 5-10 mg per hari. Anak-anak 6-17 tahun: 2.5-5 mg per hari.' },
      { name: 'Amlodipine adalah obat darah tinggi atau hipertensi. Untuk mengatasi angina pektoris Dewasa: 5-10 mg per hari.' },
      { name: 'Acetylcysteine atau asetilsistein adalah obat yang digunakan untuk mengencerkan dahak pada beberapa kondisi, seperti asma, cystic fibrosis, atau PPOK. Selain itu, obat ini juga digunakan untuk mengobati keracunan paracetamol, Kondisi: Mengencerkan dahak Dosis: Dewasa: 200 mg 3 kali sehari, atau 600 mg (untuk sediaan effervescent) sekali sehari. Dosis maksimal 600 mg per hari. Anak-anak usia 2–6 tahun: 100 mg, 2–4 kali sehari. Anak-anak usia >6 tahun: 200 mg, 2–3 kali sehari.' },
      { name: 'Methisoprinol bekerja dengan cara menghambat pertumbuhan dan penyebaran virus di dalam tubuh. Obat ini juga dapat meningkatkan kerja sistem kekebalan tubuh, sehingga membantu tubuh melawan infeksi. Dosis: Dewasa: 6–8 tablet per hari yang dibagi ke dalam beberapa kali jadwal konsumsi. Anak-anak: 3–4 tablet per hari yang dibagi ke dalam beberapa kali jadwal konsumsi.' },
      { name: 'Methisoprinol bekerja dengan cara menghambat pertumbuhan dan penyebaran virus di dalam tubuh. Bentuk obat: Sirop: Dewasa: 10 ml, 6–8 kali per hari. Anak usia >7 tahun atau berat badan >21 kg: 5 ml, 6 kali per hari. Anak usia 3–7 tahun atau berat badan 14–21 kg: 3,75 ml, 6 kali per hari. Anak usia 1–3 tahun atau berat badan 9–14 kg: 2,5 ml, 6 kali per hari. Anak usia <1 tahun atau berat badan <9 kg: 1,25 ml, 6 kali per hari.' },
      { name: 'cc' },
      { name: 'd' },
      { name: 'e' },
      { name: 'f' },
      { name: 'g' },
      { name: 'h' },
      { name: 'i' },
      { name: 'j' },
      { name: 'k' },
      { name: 'React' },
      { name: 'React native' },
      { name: 'react navigations' },
    ];
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
          color: '#F5FCFF',
        }}
      />
    );
  };

  searchItems = text => {
    let newData = this.arrayNew.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
    if(text.length >0 ){
      return itemData.indexOf(textData) > -1;
    }
    });
    this.setState({
      data: newData,
      value: text,
    });
  };

  renderHeader = () => {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 60, borderColor: '#000', borderWidth: 1, borderRadius: 10, width: '90%' }}
          placeholder="   Masukkan Nama Obat"
          placeholderTextColor="#000" 
          onChangeText={text => this.searchItems(text)}
          value={this.state.value}
        />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          padding: 2,
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Text style={{ padding: 10, color: '#F5FCFF' }}>{item.name} </Text>
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </SafeAreaView>
    );
  }
}

export default SearchFunction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  }
})