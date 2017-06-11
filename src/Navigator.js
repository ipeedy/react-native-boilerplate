import React from 'react';

import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
  TabBarBottom,
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
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#F8BBD0',
    activeBackgroundColor: '#F8BBD0',
  },
  tabBarComponent: (props) => <TabBarBottom { ...props }/>,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
});

const AppMainStack = StackNavigator({
  Home: { screen: AppMainTab },
  Settings: { screen: SettingsScreen },
}, {
  cardStyle: {
    backgroundColor: '#FCE4EC',
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
  drawerWidth: 290,
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
  swipeEnabled: false,
});

export default Navigator;
