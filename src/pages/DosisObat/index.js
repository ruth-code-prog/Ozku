import React,{ useEffect, useState } from "react";
import {Text, StyleSheet, View, TextInput, Button, ToucableOpacity} from 'react-native';
import {faCalculator} from '@fortawesome/free-solid-svg-icons';

export default function DosisObat() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [result, setResult] = useState(0);
  const [clear, setClear] = useState(0);

useEffect(() => {
  getCalculate();
  getClear();
},[]);

getCalculate  = () => {
  setResult((input1 / input2) *(input3));
}

getClear = () => {
  setClear({result: 0});
}


  return (
    <View className="DosisObat">
        <TextInput 
        style={styles.input} 
        onChangeText={setInput1}  
        value={input1}
        placeholder="dosis yang di butuhkan"
        keyboardType="numeric"/>

        <TextInput 
        style={styles.input} 
        onChangeText={setInput2} 
        value={input2}
        placeholder="dosis sediaan"
        keyboardType="numeric" />

        <TextInput 
        style={styles.input} 
        onChangeText={setInput3} 
        value={input3}
        placeholder="Pengencer"
        keyboardType="numeric" />
      <Text 
        value={result}>
        Hasil: {result}</Text>

        <Button
          style={{fontSize: 20, color: 'green'}}
          onPress={() => setResult(getCalculate)}
          title="Calculate Hasil"
        >
        </Button>

        <Button
          style={{fontSize: 20, color: 'green'}}
          onPress={() => setResult(getClear)}
          title="Hapus Hasil"
        >
        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        margin: 5,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 20,
    }
})