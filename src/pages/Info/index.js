import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import FIREBASE from '../../config/FIREBASE';
import NewsItem from '../../components/NewsItem';

const Info = () => {
    const [news, setNews] = useState ([]);

    useEffect(() => {
    FIREBASE.database()
      .ref('news/')
      .once('value')
      .then(res => {
            console.log('news: ', res.val());
          if (res.val()) {
            setNews(res.val());    
        }
      })
      .catch(Error => {
        showError
      });
  }, []);

    return (
    <View style={styles.container}>
            {news.map(item => {
                return (
                    <NewsItem
                    key={`news-${item.id}`}
                    title={item.title}
                    body={item.body}
                    image={item.image}
                    />
                    );
            })}          
    </View>
    )}    
    

export default Info
const styles = StyleSheet.create({
    container: {
    fontSize: 16,
    marginTop: 30,
    marginBottom: 16,
    }
});
