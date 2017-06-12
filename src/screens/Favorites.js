import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { HamburgerIcon } from '../components/icons';
import Colors from '../styles/Colors';

class FavoritesScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Favorites',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="heartbeat" size={23} color={tintColor} />
    ),
    headerStyle: {
      backgroundColor: Colors.PINK_100,
    },
    headerTitle: 'Favorites',
    headerTitleStyle: {
      color: Colors.WHITE,
    },
    headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
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
    color: Colors.WHITE,
  },
});

export default FavoritesScreen;
