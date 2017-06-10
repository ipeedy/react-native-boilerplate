import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const Hamburger = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.element} />
    <View style={styles.element} />
    <View style={styles.element} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  element: {
    height: 2,
    width: 22,
    borderRadius: 2,
    marginBottom: 4,
    backgroundColor: 'white',
  }
});

export default Hamburger;