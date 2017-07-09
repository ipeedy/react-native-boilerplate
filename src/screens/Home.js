import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { HamburgerIcon } from '../components/icons';
import Colors from '../styles/Colors';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Sweet home',
    drawerIcon: ({ tintColor }) => (
      <FontAwesome name="home" size={23} color={tintColor} />
    ),
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="home" size={23} color={tintColor} />
    ),
    headerStyle: {
      backgroundColor: Colors.PINK_100,
    },
    headerTitle: 'Sweet Home',
    headerTitleStyle: {
      color: Colors.WHITE,
    },
    headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
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

export default HomeScreen;
