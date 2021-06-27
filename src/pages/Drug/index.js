import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, ListItem } from 'react-native';

class SearchFunction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: '',
    };

    this.arrayNew = [
      { name: 'Covid-19 Anti Virus: Oseltamivir 2x75mg, Metisoprinol 3x2' },
      { name: 'Hipertensi Terapi: Amlodipine 1x10mg, Captopril 3x5mg'},
      { name: 'Covid-19 Vitamin:Prove D 1x1 tab, Zink 1x1 tab, Becom C 1x1 tab ' },
      { name: 'Hipertermi Terapi: Paracetamol: 3x1 tab' },
      { name: 'Rhinitis Alergic Terapi: Rhinos: 2x1 capsul' },
      { name: 'CKD on HD Terapi: Hemapo: 1amp, Larce: 1amp, Neurosanbe: 1amp' },
      { name: 'sophie' },
      { name: 'Brad' },
      { name: 'Samual' },
      { name: 'Omur' },
      { name: 'Ower' },
      { name: 'Awery' },
      { name: 'Ann' },
      { name: 'Jhone' },
      { name: 'z' },
      { name: 'bb' },
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
          placeholder="   Masukkan Dx Medis"
          onChangeText={text => this.searchItems(text)}
          value={this.state.value}
        />
      </View>
    );
  };

  render() {
    return (
      <View
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
      </View>
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