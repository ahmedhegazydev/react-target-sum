import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const RandomNumber = props => {
  const handlePress = () => {
    // console.log('clicking', props.id);
    props.onPress(props.id);
  };

  return (
    <TouchableOpacity
      style={{
        // backgroundColor: '#aaa'
        paddingBottom: 30,
      }}
      onPress={handlePress}>
      {/* <Text style={[styles.randomText, styles.selected]}>{props.number}</Text> */}
      <Text style={[styles.randomText, props.isDisabled && styles.disabled]}>
        {props.number}
      </Text>
    </TouchableOpacity>
  );
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
  disabled: {
    opacity: 0.3,
  },
});

export default RandomNumber;
