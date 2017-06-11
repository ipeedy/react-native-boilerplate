import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Hamburger } from '../components/icons';

class FavoritesScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Favorites',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="heartbeat" size={25} color={tintColor} />
    ),
    headerStyle: {
      backgroundColor: '#F8BBD0',
    },
    headerTitle: 'Favorites',
    headerTitleStyle: {
      color: '#fff',
    },
    headerLeft: <Hamburger onPress={() => navigation.navigate('DrawerOpen')} />,
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Favorites</Text>
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

export default FavoritesScreen;
