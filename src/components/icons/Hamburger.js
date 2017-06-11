import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Hamburger = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Ionicons name="ios-menu" size={25} color='white' />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingLeft: 15,
    justifyContent: 'center',
  },
});

export default Hamburger;