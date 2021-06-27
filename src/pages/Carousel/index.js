import React from 'react';
import {
  StyleSheet,
  Platform,
} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';


const images = [
    {
        banner: require('./../../assets/nurse.jpg'),
    },
    {
        banner: require('./../../assets/nurse2.jpg'),
    },
    {
        banner: require('./../../assets/team.jpg'),
    },
   ]
 
export default (Preview = ({

}) => {
  return (
    <FlatListSlider style={styles.banner}
    data={images} 
    imageKey={'banner'}
    local
  />
  );
});

const styles = StyleSheet.create({
  banner: {
      width: 280,
      height: 140,
      marginLeft: 0,
      marginRight: 200,
  },
  videoContainer: {
    width: 275,
    paddingVertical: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  videoPreview: {
    width: 275,
    height: 155,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  desc: {
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 24,
    marginTop: 18,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});



