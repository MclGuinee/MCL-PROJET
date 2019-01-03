import React from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import {Font,AppLoading} from 'expo';
import MainApp from './src/navigation/MainTabNavigator';
import { StyleProvider } from "native-base";
import getTheme from "./src/theme/components";
import variables from "./src/theme/variables/commonColor";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({
      loading: false
    });
  }
  render() {
    if (this.state.loading) {
      return <AppLoading /> ;
    }
    return ( 
      <StyleProvider style={getTheme(variables)}>
        <SafeAreaView style = {{flex: 1}} >
          <MainApp />
        </SafeAreaView>
      </StyleProvider>
    );
  }
}