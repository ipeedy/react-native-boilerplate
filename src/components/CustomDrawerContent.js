import React from 'react';
import { DrawerItems } from 'react-navigation';
import { View, StyleSheet } from 'react-native';

import Button from './Button';
import Colors from '../styles/Colors';

const CustomDrawerContent = (props) => (
  <View style={{ flex: 1 }}>
    <View style={styles.drawerContainer}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
      </View>
      <View style={{ flex: 6 }}>
        <DrawerItems { ...props } />
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <Button text="Logout" onPress={() => props.navigation.navigate('Welcome')} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 8,
  },
  avatarContainer: {
    flex: 4,
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.PINK_100,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CustomDrawerContent;
