import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

const supportedURL = "https://google.com";

const dosisobatURL = "https://www.youtube.com/watch?v=S9si163hOWA";

const dobutaminURL = "https://www.youtube.com/watch?v=29kbYuVyTNI";

const dopaminURL = "https://www.youtube.com/watch?v=piV-csQvRvw&t=201s";

const nicardipineURL = "https://www.youtube.com/watch?v=EuUFprk21Xg";

const norepinephrineURL = "https://www.youtube.com/watch?v=kI74YhpP0CM";


const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const App = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>Google</OpenURLButton>
      <OpenURLButton url={dosisobatURL}>DOSIS OBAT</OpenURLButton>
      <OpenURLButton url={dopaminURL}>DOSIS OBAT DOPAMIN</OpenURLButton>
      <OpenURLButton url={dobutaminURL}>DOSIS OBAT DOBUTAMIN</OpenURLButton>
      <OpenURLButton url={nicardipineURL}>DOSIS OBAT NICARDIPINE</OpenURLButton>
      <OpenURLButton url={norepinephrineURL}>DOSIS OBAT NOREPINEPHRINE</OpenURLButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center",marginTop: 12, marginBottom: 12,},
  //url: {marginTop: 6}
});

export default App;