/*Standard modules imports*/
import React, { Component } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import { Constants, Location, Permissions } from "expo";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

/** Styles mcl */
import { styles } from "./styles";
import { mclColors } from "../screens-util/mclColors";

export default class OrderAddressMapScreen3 extends Component {
  state = {
    region: {
      latitude: "",
      longitude: "",
      latitudeDelta: "",
      longitudeDelta: "",
      accuracy: ""
    },
    errorMessage: null
  };

  componentWillMount() {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage: "La geolocalisation ne fonctionne pas sur l'emulator Android."
      });
    } else {
      this._getLocationAsync();
    }
  }

  componentWillUnmount() {
    //navigator.geolocation.clearWatch(this.watchID);
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission d'accès au GPS non accordée"
      });
    } else {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
    }
  };

  marker() {
    return {
      latitude: this.state.location.latitude,
      longitude: this.state.location.longitude
    };
  }

  calDelta(lat, long, accuracy) {
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
    const latDelta = accuracy / oneDegreeOfLatitudeInMeters;
    const longDelta = accuracy / (oneDegreeOfLatitudeInMeters * Math.cos(lat * (Math.PI / 180)));

    this.setState({
      region: {
        latitude: lat,
        longitude: long,
        latitudeDelta: latDelta,
        longitudeDelta: longDelta,
        accuracy: accuracy
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
      {this.state.errorMessage ? <Loading /> :
        <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={this.state.location}>
          <MapView.Marker coordinate={this.marker()} title="Votre position" description="Votre position" pinColor={mclColors.green} />
        </MapView>
      }
      </View>
    );
  }
}

const Loading = () => (
  <View style={styles.container}>
    <Text>{this.state.errorMessage}</Text>
  </View>
);