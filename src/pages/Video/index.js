import React, { useState, useCallback, useRef } from "react";
import {StyleSheet, Modal, Text, View, ScrollView} from 'react-native';
import { Button, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const Video = ({link, visible, onClose}) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video finished!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
 <>
      <Button style={styles.tube} title={playing ? "pause" : "play"} onPress={togglePlaying} />
      <YoutubePlayer
        height={200}
        play={playing}
        videoId={"IB_pdEHZIsc"}
        onChangeState={onStateChange}
      />
</>
  );
}

export default Video;

const styles = StyleSheet.create({
  tube: {
    
  }
});
