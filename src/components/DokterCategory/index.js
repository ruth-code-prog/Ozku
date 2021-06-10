import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

export default function DokterCategory({category, onPress}) {
    const Icon = () => {
        if (category === 'Prawito', 'Angga') {
            return <Image source={require('./../../assets/dokMale.png')} style={styles.illustration} />;
          };
        return <Image source={require('./../../assets/dokFemale.png')} />;
    }

    return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon />
        <Text style={styles.label}>Dokter</Text>
        <Text style={styles.category}>{category}</Text>
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
      },
      label: {
        fontSize: 12,
        color: '#000000'
      },
})
