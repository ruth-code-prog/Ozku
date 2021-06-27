import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Info from '../Info';

const Informasi = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.news}>Seputar Perawat dan Loker Medis</Text>
      <Info />
    </View>
  );
};

export default Informasi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 0,
    marginTop: 10,
    color: '#FBFCFC',
  },
   news: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FBFCFC',
  },
});
