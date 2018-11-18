import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';

/* Screens */
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
/* Icons */
import { HomeIcon } from '../icons/homeIcon';
import { ProfileIcon } from '../icons/profileIcon';

const MainTabNavigationIcon = (tintColor, type) => {
  switch(type) {
    case 'home':
    return <HomeIcon color={tintColor} />;
    case 'profile': 
    return <ProfileIcon color={tintColor} />
  }
};

export const MainTabNavigation = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, 'home')
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, 'profile')
      }
    },
  },

  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: '#03C136',
      inactiveTintColor: '#464646',
      shiftting: true,
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: '#f5f7f9',
        height: 60,
        padding: 5,
        borderTopWidth: 0.4
      },
      indicatorStyle: {
        height: 0,
        backgroundColor: '#F5A623'
      }
    }
  }
);

 //const LoginStack = createStackNavigator({ Login: LoginScreen });

const mainApp = createSwitchNavigator(
  {
    //Login: LoginStack,
    App: MainTabNavigation,
  },
  /* {
    initialRouteName: 'Login'
  }  */
);

export default mainApp;
 