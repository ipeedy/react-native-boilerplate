import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Hamburger } from '../components';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="home" size={25} color={tintColor} />
    ),
    headerStyle: {
      backgroundColor: '#F8BBD0',
    },
    headerTitle: 'Sweet Home',
    headerTitleStyle: {
      color: '#fff',
    },
    headerLeft: (
      <View style={{ left: 15 }}>
        <Hamburger onPress={() => navigation.navigate('DrawerOpen')} />
      </View>
    )
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
    color: 'white',
  },
});

export default HomeScreen;
