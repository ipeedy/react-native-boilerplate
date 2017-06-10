import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class Button extends Component {
  render() {
    const { text, onPress } = this.props;

    return (
      <View>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#F48FB1"
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
    backgroundColor: '#F8BBD0',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default Button;