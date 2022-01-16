/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
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
import RandomNumber from './RandomNumber';

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

  randomNumbers = Array.from({length: props.randomNumberCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );

  // state = {
  // selectedNumbers: [0, 4];
  // };

  // target = 10 + Math.floor(40 * Math.random());
  target = randomNumbers
    .slice(0, props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);

  isNumberSelected = numberIndex => {
    return selectedNumbers.indexOf(numberIndex) >= 0;
  };

  const initialValue = [];

  const [selectedNumbers, setSelectedNumbers] = useState(initialValue);

  // ****** BEGINNING OF CHANGE ******
  // useEffect(() => {
  //   // Should not ever set state during rendering, so do this in useEffect instead.
  //   setSelectedNumbers(allowedState);
  // }, []);
  // ****** END OF CHANGE ******

  selectNumber = numberIndex => {
    // setState(prevState => {
    //   this.selectedNumbers = [...prevState.selectedNumbers, numberIndex];
    //   console.log(selectedNumbers);
    // });
    selectedNumbers.push(numberIndex);
    setSelectedNumbers(selectedNumbers);
    console.log(selectedNumbers);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        {/* <Text>Hello from Game component</Text> */}
        <Text style={styles.target}>{target}</Text>
        {/* <TextRandomNumber style={styles.target} randomNumber={202} /> */}
        {/* <Text style={styles.target}>{props.randomNumberCount}</Text> */}
        <View style={styles.randomContainer}>
          {this.randomNumbers.map((randomNumber, index) => (
            <RandomNumber
              key={index}
              id={index}
              isDisabled={this.isNumberSelected(index)}
              number={randomNumber}
              onPress={this.selectNumber}
            />
            // <Text style={styles.randomText} key={index}>
            //   {randomNumber}
            // </Text>
          ))}
        </View>
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

  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default Game;

// Game.defaultProps = {
//   randomNumberCount: '6',
// };

// Game.propTypes = {
//   randomNumberCount: PropTypes.string.isRequired,
// };
