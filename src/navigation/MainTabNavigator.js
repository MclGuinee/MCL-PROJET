import React from "react";
import { createStackNavigator, createMaterialTopTabNavigator,createSwitchNavigator } from "react-navigation";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"
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
import { color } from "color";

const MainTabNavigationIcon = (tintColor, type) => {
  switch (type) {
    case "home":
      return <Icon ios="ios-home" android="md-home" style={commonStyles.tabBarIcon} />;
    case "order":
      return <Icon ios="ios-restaurant" android="md-restaurant" style={commonStyles.tabBarIcon} />;
    case "account":
      return <Icon ios="ios-person" android="md-person" style={commonStyles.tabBarIcon} />;
    case "delivery":
      if (true) {
        //Si profile livreur, alors afficher un cycliste
        return <Icon ios="ios-bicycle" android="md-bicycle" style={commonStyles.tabBarIcon} />;
      } else {
        //Sinon l'icone d'un panier
        return <Icon ios="ios-cart" android="md-cart" style={commonStyles.tabBarIcon} />;
      }
    case "customer":
      return <Icon ios="ios-cart" android="md-cart" style={commonStyles.tabBarIcon} />;
  }
};

/* Home Stack */
const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    navigationOptions: {
      headerTitle: "Accueil",
      headerStyle: {
        backgroundColor: mclColors.green
      },
      headerTitleStyle: {
        color: "#fff",
        fontWeight: "normal"
      }
    }
  }
);

HomeStack.navigationOptions = {
  tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "home")
};

/* Order stack */
const OrderStack = createStackNavigator(
  {
    Order: {
      screen: OrderScreen
    },
    OrderSummary: {
      screen: OrderSummaryScreen
    },
    OrderAddressMap: {
      screen: OrderAddressMapScreen
    },
    Payment: {
      screen: PaymentScreen
    },
    Confirmation: {
      screen: ConfirmationScreen
    }
  },
  {
    navigationOptions: {
      headerTitle: "Commande en cours",
      headerStyle: {
        backgroundColor: mclColors.green
      },
      headerTitleStyle: {
        color: "#fff",
        fontWeight: "normal"
      }
    }
  }
);

OrderStack.navigationOptions = {
  tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "order")
};

/* Account Stack */
const AccountStack = createStackNavigator(
  {
    Account: {
      screen: AccountScreen
    },
    ForgotPwd: {
      screen: ForgotPwdScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    navigationOptions: {
      headerTitle: "Compte utilisateur",
      headerStyle: {
        backgroundColor: mclColors.green
      },
      headerTitleStyle: {
        color: "#fff",
        fontWeight: "normal"
      }
    }
  }
);

AccountStack.navigationOptions = {
  tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "account")
};

/* Delivery Stack */
const DeliveryStack = createStackNavigator(
  {
    Deliveries: {
      screen: DeliveriesScreen
    },
    DisplayAddressesMap: {
      screen: DisplayAddressesMapScreen
    }
  },
  {
    navigationOptions: {
      headerTitle: "Livraisons",
      headerStyle: {
        backgroundColor: mclColors.green
      },
      headerTitleStyle: {
        color: "#fff",
        fontWeight: "normal"
      }
    }
  }
);

DeliveryStack.navigationOptions = {
  tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "delivery")
};

/* Customer stack */
const CustomerStack = createStackNavigator(
  {
    CustomerOrdersList: {
      screen: CustomerOrdersListScreen
    }
  },
  {
    navigationOptions: {
      headerTitle: "Suivi de commandes",
      headerStyle: {
        backgroundColor: mclColors.green
      },
      headerTitleStyle: {
        color: "#fff",
        fontWeight: "normal"
      }
    }
  }
);

CustomerStack.navigationOptions = {
  tabBarIcon: ({ tintColor }) => MainTabNavigationIcon(tintColor, "customer")
};

// export const MainTabNavigation = createMaterialTopTabNavigator(
//   {
//     HomeSTK: HomeStack,
//     OrderSTK: OrderStack,
//     AccountSTK: AccountStack,
//     DeliverySTK: DeliveryStack,
//     CustomerSTK: CustomerStack
//   },

//   {
//     tabBarPosition: "bottom",
//     swipeEnabled: true,
//     animationEnabled: false,
//     tabBarOptions: {
//       activeTintColor: mclColors.green,
//       inactiveTintColor: mclColors.gray,
//       shiftting: true,
//       showLabel: false,
//       showIcon: true,
//       style: {
//         backgroundColor: "#f5f5f0",
//         height: 60,
//         padding: 5,
//         borderTopWidth: 0.4
//       },
//       indicatorStyle: {
//         height: 0,
//         backgroundColor: "#F5A623"
//       }
//     }
//   }
// );

const MainTabNavigation = createMaterialBottomTabNavigator(
  {
   Home: HomeStack,
   Order: OrderStack,
   Account: AccountStack,
   Delivery: DeliveryStack,
   Customer: CustomerStack
  },
  {
    shifting: true,
    labeled: false,
    activeColor: mclColors.green,
    inactiveColor: "#000",
    barStyle: {
      backgroundColor: "#fff",
      height: 60,
      padding: 5,
      borderTopWidth: 0.4
    },
    initialRouteName: "Home"
  }
);


const mainApp = createSwitchNavigator(
  {
    //Login: LoginStack,
    App: MainTabNavigation
  } //,
);

export default mainApp;
