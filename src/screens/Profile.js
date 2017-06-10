import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="user-circle" size={25} color={tintColor} />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            underlayColor="#F06292"
            onPress={() => this.props.navigation.navigate('Settings')}
          >
            <Ionicons name="md-settings" size={50} color="#F48FB1" />
          </TouchableHighlight>
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
    color: 'white',
  },
  buttonContainer: {
    top: 50,
  },
});

export default ProfileScreen;
