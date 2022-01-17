import React, {useState} from 'react';

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
    if (props.isDisabled) {
      return;
    }
    props.onPress(props.id);
    setSelected(true);
  };

  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={{
        // backgroundColor: '#aaa'
        paddingBottom: 30,
      }}
      onPress={handlePress}>
      {/* <Text style={[styles.randomText, styles.selected]}>{props.number}</Text> */}
      <Text style={[styles.randomText, selected && styles.disabled]}>
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
