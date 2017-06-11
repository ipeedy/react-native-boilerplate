import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Settings = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Ionicons name="md-settings" size={25} color="white" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingRight: 15,
    justifyContent: 'center',
  },
});

export default Settings;