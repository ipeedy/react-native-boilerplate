import React from 'react';
import { Platform } from 'react-native';
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
  TabBarBottom,
} from 'react-navigation';

import Colors from './styles/Colors';

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
}, {
  tabBarOptions: {
    activeTintColor: Colors.WHITE,
    inactiveTintColor: Colors.PINK_50,
    inactiveBackgroundColor: Colors.PINK_100,
    activeBackgroundColor: Colors.PINK_100,
    showIcon: true,
    showLabel: Platform.OS === 'ios',
    indicatorStyle: {
      backgroundColor: Colors.PINK_300,
    },
    style: {
      backgroundColor: Colors.PINK_100,
    },
    upperCaseLabel: false,
  },
  // tabBarComponent: (props) => <TabBarBottom { ...props }/>,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
});

const AppMainStack = StackNavigator({
  Home: { screen: AppMainTab },
  Settings: { screen: SettingsScreen },
}, {
  cardStyle: {
    backgroundColor: Colors.PINK_50,
  },
  mode: 'modal',
});

const AppDrawer = DrawerNavigator({
  Home: {
    screen: AppMainStack,
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
    activeBackgroundColor: Colors.PINK_100,
    activeTintColor: Colors.WHITE,
    inactiveTintColor: Colors.PINK_200,
  },
});

const Navigator = TabNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: { screen: AppDrawer },
}, {
  navigationOptions: {
    tabBarVisible: false,
  },
  swipeEnabled: false,
});

export default Navigator;
