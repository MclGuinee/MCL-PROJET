/*Standard modules imports*/
import React, { Component } from "react";
import { Platform, View, Text, Dimensions, InteractionManager } from "react-native";
import { Container, Header, Body, Left, Right, Title, Footer, FooterTab, Button, Icon } from "native-base";
import { Constants, Location, Permissions, MapView } from "expo";

/* Styles*/
import { styles } from "./styles";
import { commonStyles } from "../screens-util/commonStyles";

export default class DisplayAddressesMapScreen extends Component {
  state = {
    location: null,
    errorMessage: null
  };

  componentWillMount() {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage: "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      this.getLocationAsync();
    }
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });

    const { width, height } = Dimensions.get("window");
    const ratio = width / height;

    // const coordinates = {
    //   latitude: 9.641185499999999,
    //   longitude: -13.57840120000003
    //   // latitudeDelta: 0.0922,
    //   //longitudeDelta: 0.0922 * ratio
    // };
  };

  render() {
    //Prévoir saisie d'un nom correspondant à cette adresse GPS
    // Et saisir à la main le nom de la commune

    return (
      <Container>
        <View style={styles.container}>{this.state.errorMessage ? <Loading /> : <MapView style={commonStyles.map} initialRegion={this.state.location} />}</View>
      </Container>
    );
  }
}

const Loading = () => (
  <View style={styles.container}>
    <Text>Loading...</Text>
  </View>
);
