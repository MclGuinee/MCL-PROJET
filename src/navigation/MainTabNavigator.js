import React from "react";
import { createSwitchNavigator, createStackNavigator, createMaterialTopTabNavigator } from "react-navigation";
import { Icon } from "native-base";

/* Screens */
import HomeScreen from "../screens/home/HomeScreen";
import OrderScreen from "../screens/order/OrderScreen";
import ProfileScreen from "../screens/auth/ProfileScreen";
import AccountScreen from "../screens/auth/AccountScreen";
import ForgotPwdScreen from "../screens/auth/ForgotPwdScreen";
import OrderSummaryScreen from "../screens/order/OrderSummaryScreen";
import OrderAddressMapScreen from "../screens/order/OrderAddressMapScreen";
import PaymentScreen from "../screens/payment/PaymentScreen";
import ConfirmationScreen from "../screens/payment/ConfirmationScreen";
import DisplayAddressesMapScreen from "../screens/delivery/DisplayAddressesMapScreen";
import CustomerOrdersListScreen from "../screens/order/CustomerOrdersListScreen";
import AvailableDeliveriesScreen from "../screens/delivery/AvailableDeliveriesScreen";

/* Icons */
import { Ionicons } from "@expo/vector-icons";
import { ProfileIcon } from "../icons/profileIcon";

/*Styles*/
import { commonStyles } from "../screens/screens-util/commonStyles";
import { mclColors } from "../screens/screens-util/mclColors";
import DeliveriesScreen from "../screens/delivery/DeliveriesScreen";

const MainTabNavigationIcon = (tintColor, type) => {
  switch (type) {
    case "home":
      return <Icon ios="ios-home" android="md-home" style={commonStyles.mclIcon} />;
    case "order":
      return <Icon ios="ios-restaurant" android="md-restaurant" style={commonStyles.mclIcon} />;
    case "profile":
      return <Icon ios="ios-person" android="md-person" style={commonStyles.mclIcon} />;
    case "delivery":
      if (true) {
        //Si profile livreur, alors afficher un cycliste
        return <Icon ios="ios-bicycle" android="md-bicycle" style={commonStyles.mclIcon} />;
      } else {
        //Sinon l'icone d'un panier
        return <Icon ios="ios-cart" android="md-cart" style={commonStyles.mclIcon} />;
      }
    case "customer":
      return <Icon ios="ios-cart" android="md-cart" style={commonStyles.mclIcon} />;
  }
};

export const MainTabNavigation = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "home")
      }
    },
    Order: {
      screen: OrderScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "order")
      }
    },
    OrderSummary: {
      screen: OrderSummaryScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "order")
      }
    },
    OrderAddressMap: {
      screen: OrderAddressMapScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "order")
      }
    },
    Payment: {
      screen: PaymentScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "order")
      }
    },
    Confirmation: {
      screen: ConfirmationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "order")
      }
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "profile")
      }
    },
    ForgotPwd: {
      screen: ForgotPwdScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "profile")
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "profile")
      }
    },
    Deliveries: {
      screen: DeliveriesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "delivery")
      }
    },
    CustomerOrdersList: {
      screen: CustomerOrdersListScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "customer")
      }
    },
    DisplayAddressesMap: {
      screen: DisplayAddressesMapScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "delivery")
      }
    }
  },

  {
    tabBarPosition: "bottom",
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: mclColors.green,
      inactiveTintColor: mclColors.gray,
      shiftting: true,
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: "#f5f5f0",
        height: 60,
        padding: 5,
        borderTopWidth: 0.4
      },
      indicatorStyle: {
        height: 0,
        backgroundColor: "#F5A623"
      }
    }
  }
);

const mainApp = createSwitchNavigator(
  {
    //Login: LoginStack,
    // Dans un deuxième temps prevoir 2 stack : 1 pour la partie home et gestion login et profile; et 1 autre pour le processus de commande et livraison
    App: MainTabNavigation
  } //,
  /* {
    initialRouteName: 'Login'
  }  */
);

export default mainApp;
