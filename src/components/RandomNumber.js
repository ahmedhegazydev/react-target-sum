import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const RandomNumber = props => {
  return <Text style={styles.randomText}>{props.number}</Text>;
};

const styles = StyleSheet.create({
  randomText: {
    fontSize: 35,
    width: 130,
    backgroundColor: '#aaa',
    margin: 20,
    padding: 20,
    textAlign: 'center',
  },
});

export default RandomNumber;
