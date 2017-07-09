import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import Colors from '../styles/Colors';

class Button extends Component {
  render() {
    const { text, onPress } = this.props;

    return (
      <View>
        <TouchableHighlight
          style={styles.button}
          underlayColor={Colors.PINK_200}
          onPress={onPress}
        >
          <Text style={styles.text}>{text}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 130,
    height: 40,
    backgroundColor: Colors.PINK_100,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: Colors.WHITE,
  },
});

export default Button;
