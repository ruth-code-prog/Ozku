import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Video from '../Video';
import Drug from '../Drug';
import DosisObat from '../DosisObat';
import DosisObatEmergency from '../DosisObatEmergency';

const Obat = () => {
  return (
    <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.subtitle}>Supported By Alo Care Apps</Text>
          <Video />
          <Text style={styles.KalkulatorDosisObat}>Mencari Obat</Text>
          <Drug />
          <Text style={styles.KalkulatorDosisObat}>Kalkulator Dosis Obat</Text>
          <DosisObat />
          <Text style={styles.DosisObatEmergency}>
            Kalkulator Dosis Obat Emergency
          </Text>
          <DosisObatEmergency />
        </ScrollView>
    </View>
  );
};

export default Obat;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  header: {
    paddingHorizontal: 12,
    //paddingTop: 8,
    marginBottom: 100,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FBFCFC',
    textAlign: 'center',
  },
  KalkulatorDosisObat: {
    marginTop: 40,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FBFCFC',
  },
  DosisObatEmergency: {
    marginTop: 40,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FBFCFC',
  },
});
