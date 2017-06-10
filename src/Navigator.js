import React from 'react';

import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation';

import WelcomeScreen from './screens/Welcome';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import FavoritesScreen from './screens/Favorites';
import SettingsScreen from './screens/Settings';

import { CustomDrawerContent } from './components';

const AppMainTab = TabNavigator({
  Home: { screen: HomeScreen },
  Favorites: { screen: FavoritesScreen },
  Profile: { screen: ProfileScreen },
});

const AppDrawer = DrawerNavigator({
  Home: {
    screen: AppMainTab,
  },
  Settings: {
    screen: SettingsScreen,
  },
}, {
  contentComponent: props =>
    <CustomDrawerContent
      { ...props }
    />,
  contentOptions: {
    activeBackgroundColor: '#F48FB1',
    activeTintColor: 'white',
  },
});

const Navigator = TabNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: { screen: AppDrawer },
}, {
  navigationOptions: {
    tabBarVisible: false,
  },
});

export default Navigator;
