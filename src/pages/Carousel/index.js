import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';


const images = [
    {
        banner: require('./../../assets/nurse.jpg'),
        desc:
          'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
        banner: require('./../../assets/nurse2.jpg'),
        desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
        banner: require('./../../assets/team.jpg'),
        desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
   ]
 
export default (Preview = ({
  style,
  item,
  imageKey,
  onPress,
  index,
  active,
  local,
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



