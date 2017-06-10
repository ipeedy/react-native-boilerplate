import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ProfileScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
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

export default ProfileScreen;
