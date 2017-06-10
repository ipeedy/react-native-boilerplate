import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class FavoritesScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Favorites',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="heartbeat" size={25} color={tintColor} />
    )
  }

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
