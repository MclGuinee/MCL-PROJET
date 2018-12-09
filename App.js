import React from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import {Font,AppLoading} from 'expo';
import MainApp from './src/navigation/MainTabNavigator';

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
      <SafeAreaView style = {{flex: 1}} >
         <MainApp />
      </SafeAreaView>
    );
  }
}