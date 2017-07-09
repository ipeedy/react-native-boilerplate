import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import Navigator from './Navigator';
import Colors from './styles/Colors';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          { Platform.OS === 'android' && Platform.Version >= 20 ?
          <View
            style={{
              height: 24,
              backgroundColor: Colors.PINK_200,
            }}
          />
          : null }
          <Navigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PINK_50,
  },
});

export default App;
