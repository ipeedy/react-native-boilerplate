import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { HamburgerIcon, SettingsIcon } from '../components/icons';
import Colors from '../styles/Colors';

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Profile',
    drawerIcon: ({ tintColor }) => (
      <FontAwesome name="user-circle" size={23} color={tintColor} />
    ),
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="user-circle" size={23} color={tintColor} />
    ),
    headerStyle: {
      backgroundColor: Colors.PINK_100,
    },
    headerTitle: 'Profile',
    headerTitleStyle: {
      color: Colors.WHITE,
    },
    headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
    headerRight: <SettingsIcon onPress={() => navigation.navigate('Settings')} />,
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
    color: Colors.WHITE,
  },
});

export default ProfileScreen;
