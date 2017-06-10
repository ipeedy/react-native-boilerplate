import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BackIcon = ({ onPress }) => (
  <View style={{ left: 15 }}>
    <TouchableOpacity
      onPress={onPress}
    >
      <Ionicons name="md-arrow-back" size={22} color="white" />
    </TouchableOpacity>
  </View>
);

export default BackIcon;