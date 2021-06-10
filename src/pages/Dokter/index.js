import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import FIREBASE from '../../config/FIREBASE';
import DokterCategory from '../../components/DokterCategory';

const Dokter = () => {
    const [category_dokter, setCategoryDokter] = useState ([]);

    useEffect(() => {
    FIREBASE.database()
      .ref('category_dokter/')
      .once('value')
      .then(res => {
            console.log('category dokter: ', res.val());
          if (res.val()) {
            setCategoryDokter(res.val());    
        }
      })
      .catch(Error => {
        showError
      });
  }, []);

    return (
    <View style={styles.container}>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {category_dokter.map(item => {
                return (
                    <DokterCategory
                    key={`category-${item.id}`}
                    category={item.category}
                />
                );
            })}          
      </ScrollView>
    </View>
    )}    
    

export default Dokter
const styles = StyleSheet.create({
  container: {
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
});
