import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { Hamburger, Settings } from '../components/icons';

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="user-circle" size={25} color={tintColor} />
    ),
    headerStyle: {
      backgroundColor: '#F8BBD0',
    },
    headerTitle: 'Profile',
    headerTitleStyle: {
      color: '#fff',
    },
    headerLeft: <Hamburger onPress={() => navigation.navigate('DrawerOpen')} />,
    headerRight: <Settings onPress={() => navigation.navigate('Settings')} />,
  })

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
