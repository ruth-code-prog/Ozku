import React,{ useEffect, useState } from "react";
import {Text, StyleSheet, View, TextInput, Button, ToucableOpacity} from 'react-native';
import {faCalculator} from '@fortawesome/free-solid-svg-icons';
import {Gap} from '../../components';

export default function Imt() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);
  const [clear, setClear] = useState(0);

useEffect(() => {
  getCalculate();
  getClear();
},[]);

getCalculate  = () => {
    setResult(input1 / Math.pow(input2, 2));
}

getClear = () => {
  setClear({result: 0});
}


  return (
    <View className="RumusImt" style={styles.container}>
        <Gap height={4} />
      <Text style={styles.subtitle}>IMT (Index Massa Tubuh)</Text>
      <Gap height={10} />
      <Text style={styles.keterangan}>Berat Badan</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInput1}
        value={input1}
        placeholder="Berat Badan (dalam kg)"
        placeholderTextColor="#000"
        keyboardType="numeric"
      />

      <Text style={styles.keterangan}>
        Tinggi Badan dalam Meter (Misal 175cm, maka 1.75)
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setInput2}
        value={input2}
        placeholder="Tinggi Badan dalam Meter"
        placeholderTextColor="#000"
        keyboardType="numeric"
      />
      <Text style={styles.hasil} value={result}>
        Hasil IMT: {result || 0}
      </Text>
      <Button
        color="#27AE60"
        style={{fontSize: 20, color: 'green'}}
        onPress={() => setResult(getCalculate)}
        title="Calculate Hasil"></Button>
      <Button
        color="#FA8072"
        style={{fontSize: 20, color: 'green'}}
        onPress={() => setResult(getClear)}
        title="Hapus Hasil"></Button>
      <Text style={styles.keterangan}>
        Nilai/ Hasil IMT kurang dari 18,5 (underweight)
      </Text>
      <Text style={styles.rincian}>
        Anda dapat dikatakan memiliki berat badan kurang atau underweight jika
        angka IMT Anda kurang dari angka 18,5. Berat badan kurang bukanlah
        kondisi yang sehat. Kondisi ini dapat meningkatkan risiko Anda untuk
        mengalami beberapa masalah kesehatan, seperti sistem kekebalan tubuh
        lemah, tulang menjadi rapuh, sulit memperoleh keturunan atau
        infertilitas, hingga kurang gizi.
      </Text>
      <Text style={styles.keterangan}>
        Hasil/ Nilai IMT 18,5 hingga 25,0 (normal)
      </Text>
      <Text style={styles.rincian}>
        Nilai IMT yang termasuk pada rentang angka ini disebut berat badan
        normal atau ideal. Namun, memiliki berat badan ideal bukan berarti Anda
        bebas melakukan apa pun. Anda tetap dianjurkan untuk menjaga berat badan
        dan kesehatan tubuh secara keseluruhan dengan mengonsumsi makanan
        bernutrisi, mencukupi waktu istirahat, melakukan olahraga secara rutin,
        serta menghindari kebiasaan buruk, seperti merokok atau mengonsumsi
        minuman beralkohol.
      </Text>
      <Text style={styles.keterangan}>
        Hasil/ Nilai IMT Anda 25,1 hingga 27,0 (overweight)
      </Text>
      <Text style={styles.rincian}>
        Bila hasil perhitungan IMT menunjukkan nilai antara 25,1–27,0, berarti
        Anda memiliki berat badan berlebih atau overweight. Kondisi ini juga
        tidak baik bagi kesehatan karena dapat meningkatkan risiko berbagai
        penyakit, seperti stroke, diabetes tipe 2, osteoarthritis, dan
        hipertensi. Sebagai upaya pencegahan, Anda disarankan mengambil langkah
        untuk mengurangi berat badan.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      borderRadius: 8,
      marginBottom: 20,
    },
    input: {
        margin: 5,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 20,
        borderRadius: 20,
        width: 260,
        width: '90%',
        color: '#000000',
        fontWeight: 'bold',
      },
      hasil: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#27AE60',
      },
      subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 0,
        marginTop: 10,
        color: '#000000',
      },
      keterangan: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 10,
        color: '#000000',
      },
      rincian: {
        fontSize: 12,
        color: '#000000'
      },
})