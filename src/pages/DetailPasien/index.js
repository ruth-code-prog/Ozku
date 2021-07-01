import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import FIREBASE from '../../config/FIREBASE';

export default class DetailPasien extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kontak: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('pasien/' + this.props.route.params.id)
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let pasienItem = {...data};

        this.setState({
          pasien: pasienItem,
        });
      });
  }

  render() {
    const {pasien} = this.state;
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.pages}>
            <Text>Nama Pasien: </Text>
            <Text style={styles.text}>{pasien.nama} </Text>

            <Text>Nomor Ruangan : </Text>
            <Text style={styles.text}>{pasien.nomorRuang} </Text>

            <Text>Scedule Medis : </Text>
            <Text style={styles.text}>{pasien.scedule} </Text>

            <Text>DPJP / Co: </Text>
            <Text style={styles.text}>{pasien.DPJP} </Text>

            <Text>Visite: </Text>
            <Text style={styles.text}>{pasien.task} </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    margin: 30,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
