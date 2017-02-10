/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

// import ListItem from './components/ListItem';

class ListItem extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfGreeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <ListItem name='Rexxar' />
        <ListItem name='Jaina' />
        <ListItem name='Valeera' />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreeting);
