/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, NativeModules } from 'react-native';

const instructions = "Turn on Debugger"

type Props = {};
export default class App extends Component<Props> {
  render() {
    console.log('native modules', NativeModules.Counter);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text
          onPress={() => {
            NativeModules.Counter.increment();
            NativeModules.Counter.getCount((first, ...others) => {
              console.log('count is ', first);
              console.log('other arguments ', others);
            });
          }}
        >
          Increase
        </Text>

        <Text onPress={this.decrement}>decrement</Text>
      </View>
    );
  }

  decrement = () => {
    NativeModules.Counter.decrement()
      .then(res => console.log(res))
      .catch(e => console.log(e.message, e.code));
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
