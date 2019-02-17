import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Constants, Location, Permissions } from "expo";
import MapView from "react-native-maps";
import { Container, Content } from "native-base";

/*Import de styles */
import { styles } from "./styles";

const latitudeDelta = 0.00922 * 1.5;
const longitudeDelta = 0.00421 * 1.5;

export default class OrderAddressMapScreen extends Component {
  state = {
    region: {
      longitude: null,
      latitude: null,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta
    },
    initialRegion: { longitude: -13.712222, latitude: 9.509167, latitudeDelta: latitudeDelta, longitudeDelta: longitudeDelta },
    selectedLocation: {
      longitude: null,
      latitude: null,
      customAddressName: null
    }
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
    console.log(e.nativeEvent.coordinate.longitude);
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

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{ flex: 1 }}>
            <MapView
              style={styles.map}
              region={this.state.region.latitude != null ? this.state.region : this.state.initialRegion}
              showsUserLocation={true}
              followUserLocation={true}
              onRegionChange={this.onRegionChange.bind(this)}
              onPress={this.onMapPress.bind(this)}
            >
              {/* <MapView.Marker
            coordinate={{
              latitude: this.state.region.latitude + 0.0005 || this.state.initialRegion.latitude,
              longitude: this.state.region.longitude + 0.0005 || this.state.initialRegion.longitude,
            }}
          > */}
              <View>
                <Text style={{ color: "#000" }}>
                  {this.state.lastLong} / {this.state.lastLat}
                </Text>
              </View>
              {/* </MapView.Marker> */}
            </MapView>
          </View>
        </Content>
      </Container>
    );
  }
}
