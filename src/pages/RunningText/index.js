import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import TextTicker from 'react-native-text-ticker'

export default class Example extends PureComponent {
  render(){
    return(
      <View style={styles.container}>
        <TextTicker
          style={{ fontSize: 18 }}
          duration={24000}
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={1000}
        >
          Selamat Datang di...Perawat Mobile App, Catatan Medis pasien berbasis Digital (Fitur Premium), Kalkulator Dosis Obat, Pencarian Obat dan Info Seputar Perawat serta Loker, Eko Setiaji CEO and Founder Perawat Mobile App (0895600394345), web: ekosetiaji.my.id
        </TextTicker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

