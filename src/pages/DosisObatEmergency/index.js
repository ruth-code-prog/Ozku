import React,{ useEffect, useState } from "react";
import {Text, StyleSheet, View, TextInput, Button, ToucableOpacity} from 'react-native';
import {faCalculator} from '@fortawesome/free-solid-svg-icons';

export default function DosisObat() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [input4, setInput4] = useState(0);
  const [result, setResult] = useState(0);
  const [clear, setClear] = useState(0);

useEffect(() => {
  getCalculate();
  getClear();
},[]);

getCalculate  = () => {
  setResult((input1 * input2 * input3) / (input4));
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
        placeholder="Berat Badan Pasien dalam kg"
        keyboardType="numeric" />

        <TextInput 
        style={styles.input} 
        onChangeText={setInput3} 
        value={input3}
        placeholder="Satuan Waktu: 60"
        keyboardType="numeric" />

        <TextInput 
        style={styles.input} 
        onChangeText={setInput4} 
        value={input4}
        placeholder="Pengencer--> lihat keterangan di bawah ini"
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

        <Text style={styles.keterangan}>
            NB Pengencer: 
        </Text>

        <Text style={styles.jarak}>
            Pengencer Dopamin: 
        </Text>
        <Text>Dopamin 1amp= 200mg</Text>
        <Text>200/50 * 1000= 4000</Text>
 
        <Text style={styles.jarak}>
            Pengencer Dobutamin: 
        </Text>
        <Text>Dobutamin 1amp= 250mg</Text>
        <Text>250/50 * 1000= 5000</Text>

        <Text style={styles.jarak}>
            Pengencer Nicardipine: 
        </Text>
        <Text>Nicardipine 10mg/10ml</Text>
        <Text>10/50 * 1000= 200</Text>

        <Text style={styles.jarak}>
            Pengencer Norepinephrine: 
        </Text>
        <Text>Norepinephrine 1amp= 4mg</Text>
        <Text>4/50 * 1000= 80</Text>

        <Text style={styles.jarak}>
            keterangan: 
        </Text>
        <Text>50= di encerkan dalam spuit 50cc</Text>
        <Text>1000 konversi dari 1mg = 1000mcg</Text>
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
    },
    keterangan: {
        fontWeight: 'bold',
    },
    jarak: {
        marginTop: 10,
    }
})
