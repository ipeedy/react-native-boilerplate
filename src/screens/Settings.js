import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { BackIcon } from '../components';

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#F8BBD0',
    },
    headerTitle: 'Settings',
    headerTitleStyle: {
      color: '#fff',
    },
    headerLeft: <BackIcon onPress={() => navigation.goBack()} />
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
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
    color: 'white',
  },
});

export default SettingsScreen;
