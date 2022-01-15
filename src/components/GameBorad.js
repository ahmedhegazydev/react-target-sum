/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TextRandomNumber from './randomNumberText';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Game = props => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  target = 10 + Math.floor(40 * Math.random());
  // randomNumbers = Array.from({length: this.props.randomNumberCount});

  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        {/* <Text>Hello from Game component</Text> */}
        <Text style={styles.target}>{target}</Text>
        {/* <TextRandomNumber style={styles.target} randomNumber={202} /> */}
        <Text style={styles.target}>{props.randomNumberCount}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  target: {
    backgroundColor: '#aaa',
    fontSize: 40,
    textAlign: 'center',
    margin: 30,
    padding: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Game;

// Game.defaultProps = {
//   randomNumberCount: '6',
// };

// Game.propTypes = {
//   randomNumberCount: PropTypes.string.isRequired,
// };
