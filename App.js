import React from 'react';
import { SafeAreaView, View } from 'react-native';
import MainApp from './src/navigation/MainTabNavigator';

export default class App extends React.Component {
  render() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <MainApp />
        </SafeAreaView>
    );
  }
}