import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Constants, Location, Permissions } from "expo";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Container, Content, TextInput, Body, Label, Right, Button } from "native-base";

/*Import de styles */
import { styles } from "./styles";
import { Provider } from "react-redux";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 9.568466;
const LONGITUDE = -13.645032;

const latitudeDelta = 0.00922 * 35;
const longitudeDelta = latitudeDelta * ASPECT_RATIO;

export default class OrderAddressMapScreen extends Component {
  state = {
    region: {
      longitude: LONGITUDE,
      latitude: LATITUDE,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta
    },
    currentLocation: {
      longitude: LONGITUDE,
      latitude: LATITUDE
    },
    addressName: ""
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});

    let currentRegion = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta
    };

    this.setState({ region: currentRegion });
  };

  onMapPress(e) {
    let selectedRegion = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta
    };

    this.onRegionChange(selectedRegion);
  }

  onRegionChange(selectedRegion) {
    this.setState({
      region: selectedRegion
    });
  }

  saveAddress(){
  }

  render() {
    return (
      <View>
        {/* <MapView 
        initialRegion={this.state.region} 
        provider={PROVIDER_GOOGLE} 
        style={styles.map} 
        onPress={e => onMapPress(e)}
        /> */}
        

          <View>
            <TextInput placeholder="Donner un nom à cette adresse" onChangeText={text => this.setState({ addressName: text })} />
            <Button success onPress={() => saveAddress()}>
              <Text>VALIDER</Text>
            </Button>
          </View>
      </View>
    );
  }
}
