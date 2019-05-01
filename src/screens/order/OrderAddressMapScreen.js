import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import { Location, Permissions } from "expo";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { TextInput } from "native-base";
import {AddressNameCallout} from "./AddressNameCallout";

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

  saveAddress() {}

  render() {
    return (
      <View>
        <MapView initialRegion={this.state.region} provider={PROVIDER_GOOGLE} style={styles.map} onPress={e => this.onMapPress(e)} />
        {/* <MapView.Callout>
          <View>
            <TextInput placeholder={"Search"} />
          </View>
        </MapView.Callout> */}
        <MapView.Callout tooltip style={styles.callout}>
                <AddressNameCallout
                  aAddressName={"character.name"}
                />
              </MapView.Callout>
      </View>
    );
  }
}
