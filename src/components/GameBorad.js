/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';
import arrayShuffle from 'array-shuffle';

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

  const initValBgTitleColor = 'rgb(128,128,128)';
  const [titleBgColor, setTitleBgColor] = useState(initValBgTitleColor);

  const initValTitleStatus = 'PLAYING';
  const [statusTitle, setStatusTitle] = useState(initValTitleStatus);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  randomNumbers = Array.from({length: props.randomNumberCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );
  const shuffledRandomNumbers = arrayShuffle(randomNumbers);

  // state = {
  // selectedNumbers: [0, 4];
  // };

  // target = 10 + Math.floor(40 * Math.random());
  target = randomNumbers
    .slice(0, props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);

  const initialValue = [];

  const [selectedNumbers, setSelectedNumbers] = useState(initialValue);

  isNumberSelected = numberIndex => {
    return selectedNumbers.includes(numberIndex);
  };

  selectNumber = numberIndex => {
    // setState(prevState => {
    //   this.selectedNumbers = [...prevState.selectedNumbers, numberIndex];
    //   console.log(selectedNumbers);
    // });
    selectedNumbers.push(numberIndex);
    setSelectedNumbers(selectedNumbers);
    console.log(selectedNumbers);

    // console.log(gameStatus());
    gameStatus();
  };

  gameStatus = () => {
    const sumCollected = selectedNumbers.reduce(
      (acc, curr) => acc + shuffledRandomNumbers[curr],
      0,
    );
    console.log(sumCollected);
    // console.warn(sumCollected);

    if (sumCollected < this.target) {
      // setTitleBgColor(initValBgTitleColor);
      // setStatusTitle("PLAYING");
      return 'PLAYING';
    }

    if (sumCollected == this.target) {
      setTitleBgColor('green');
      setStatusTitle('WON');
      clearTimeout(timer);
      return 'WON';
    }
    if (sumCollected > this.target) {
      setTitleBgColor('red');
      setStatusTitle('LOST');
      return 'LOST ';
    }
    // return 'WON';
    // return 'LOST';
    // return 'PLAYING';
  };

  const [timerCount, setTimer] = useState(props.initialSeconds);
  const [timeLeft, setTimeLeft] = useState(props.initialSeconds);

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setTimer(lastTimerCount => {
  //       lastTimerCount <= 1 && clearInterval(interval);
  //       if (lastTimerCount <= 1) {
  //         setTitleBgColor('red');
  //         setStatusTitle('LOST');
  //       }
  //       return lastTimerCount - 1;
  //     });
  //     // console.log('Hello world ');
  //   }, 1000); //each count lasts for a second
  //   //cleanup the interval on complete
  //   return () => clearInterval(interval);
  // }, []);

  const Completionist = () => <span>You are good to go!</span>;
  // Renderer callback with condition
  const renderer = ({hours, minutes, seconds, completed}) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  let timer = () => {};

  const startTimer = () => {
    timer = setTimeout(() => {
      if (timeLeft <= 0) {
        clearTimeout(timer);
        return false;
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timer);
  });

  const start = () => {
    setTimeLeft(30);
    clearTimeout(timer);
    startTimer();
  };

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      {/* <Text
          style={[styles.target, styles[`STATUS_${this.gameStatus()}`.trim()]]}>
          {target}
        </Text> */}
      <Text style={[styles.target, {backgroundColor: titleBgColor}]}>
        {target}
      </Text>

      {/* <TextRandomNumber style={styles.target} randomNumber={202} /> */}
      {/* <Text style={styles.target}>{props.randomNumberCount}</Text> */}
      <View style={styles.randomContainer}>
        {shuffledRandomNumbers.map((randomNumber, index) => (
          <RandomNumber
            key={index}
            id={index}
            isDisabled={
              this.isNumberSelected(index) || statusTitle !== 'PLAYING'
            }
            number={randomNumber}
            onPress={this.selectNumber}
          />
          // <Text style={styles.randomText} key={index}>
          //   {randomNumber}
          // </Text>
        ))}

        {/* <Text style={styles.sectionTitle}>{gameStatus()}</Text> */}
        <Text style={styles.sectionTitle}>{statusTitle}</Text>

        {/* for using useEffect and setInterval */}
        {/* <Text style={styles.sectionTitle}>{timerCount}</Text> */}
        <Text style={styles.sectionTitle}>{timeLeft}</Text>

        {/* <Countdown date={Date.now() + 5000} renderer={renderer} /> */}
      </View>
    </View>
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
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  STATUS_PLAYING: {
    backgroundColor: '#bbb',
  },

  STATUS_WON: {
    backgroundColor: 'green',
  },

  STATUS_LOST: {
    backgroundColor: 'red',
  },
});

export default Game;

// Game.defaultProps = {
//   randomNumberCount: '6',
// };

// Game.propTypes = {
//   randomNumberCount: PropTypes.string.isRequired,
// };
