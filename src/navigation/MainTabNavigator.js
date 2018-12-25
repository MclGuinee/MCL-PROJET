import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';

/* Screens */
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import ProfileScreen from '../screens/ProfileScreen';
/* Icons */
// import { HomeIcon } from '../icons/homeIcon';
import { Ionicons } from '@expo/vector-icons';
import { ProfileIcon } from '../icons/profileIcon';
import AccountScreen from '../screens/auth/AccountScreen';

const MainTabNavigationIcon = (tintColor, type) => {
  switch(type) {
    case 'home': return <Ionicons color={tintColor} name="md-home" ios="ios-home-outline" size={32} />;
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
    Order: {
      screen: OrderScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, 'order')
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, 'profile')
      }
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor )
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
  }//,
  /* {
    initialRouteName: 'Login'
  }  */
);

export default mainApp;
 