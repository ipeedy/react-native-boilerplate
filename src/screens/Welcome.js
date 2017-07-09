import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from '../components';
import Colors from '../styles/Colors';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.buttonContainer}>
          <Button text="Go to main" onPress={() => this.props.navigation.navigate('Main')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: Colors.WHITE,
  },
  buttonContainer: {
    top: 100,
  },
});

export default WelcomeScreen;
