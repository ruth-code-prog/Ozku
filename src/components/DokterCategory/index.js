import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

export default function DokterCategory({category, onPress, total, kamar, image}) {
    const Icon = () => {
        if (category === 'Prawito', 'Angga') {
            return <Image source={require('./../../assets/dokMale.png')} style={styles.illustration} />;
          };
        return <Image source={require('./../../assets/dokFemale.png')} />;
    }

    return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.category}>Dokter {category}</Text>
        <Text style={styles.kamar}>{kamar}</Text>
        <Text style={styles.total}>Pasien: {total}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 20,
        shadowColor: '#000',
        height: 160,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      illustration: {
        marginBottom: 28,
      },
      category: {
        fontSize: 12,
        color: '#000000',
        marginLeft: 6,
      },
      label: {
        fontSize: 12,
        color: '#000000'
      },
      total: {
        fontSize: 12,
        color: '#000000',
        marginTop: 114,
        position: 'absolute',
        marginLeft: 20,
      },
      kamar: {
        fontSize: 12,
        color: '#000000',
        marginTop: 98,
        marginLeft: 20,
        position: 'absolute'
      }, 
      image: {width: 80, height: 80, borderRadius: 50},
})
