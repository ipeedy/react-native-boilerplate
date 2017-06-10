import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class FavoritesScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Favorites',
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
