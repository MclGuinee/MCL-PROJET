import React, { Component } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Location, Permissions } from "expo";
import { MapView } from 'expo';

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;

//GPS du restaurant pilote
const START_LATITUDE = 9.546075;
const START_LONGITUDE = -13.672829;

//GPS du restaurant pilote
const END_LATITUDE = 9.546080;
const END_LONGITUDE = -13.672835;

const latitudeDelta = 0.00922 * 10;
const longitudeDelta = latitudeDelta * ASPECT_RATIO;

export default class OrderAddressMapScreen extends Component {
  state = {
    region: {
      latitude: START_LATITUDE,
      longitude: START_LONGITUDE,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    },
    startLocation: {
      longitude: START_LONGITUDE,
      latitude: START_LATITUDE,
    },
    endLocation: {
      latitude:"",
      longitude:"",
    },
  };

  // componentWillMount() {
  //   this.getLocationAsync();
  // }

  // getLocationAsync = async () => {
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   let customerLocation;
  //   if (status !== "granted") {
  //     console.log("Permission to access location was denied");

  //     //Si le client n'est pas  localisable, on affiche l'emplacement du restaurant.
  //     this.setState({region : {
  //       latitude: START_LATITUDE,
  //       longitude: START_LONGITUDE,
  //       latitudeDelta: latitudeDelta,
  //       longitudeDelta: longitudeDelta
  //     }});
  //   }else{

  //     //On affiche la zone du client, sinon
  //     const customerLocation = await Location.getCurrentPositionAsync({}).coords;
  //     this.setState({
  //       region : {
  //         latitude: customerLocation.latitude,
  //         longitude: customerLocation.longitude,
  //         latitudeDelta: latitudeDelta,
  //         longitudeDelta: longitudeDelta        
  //       }
  //     });

  //     this.setState({endLocation:customerLocation})
  //   }
  // };

  // onMapPress=(e) => {
  //   let selectedRegion = {
  //     latitude: e.nativeEvent.coordinate.latitude,
  //     longitude: e.nativeEvent.coordinate.longitude,
  //     latitudeDelta: latitudeDelta,
  //     longitudeDelta: longitudeDelta
  //   };

  //   this.onRegionChange(selectedRegion);
  //   this.setState({endLocation:e.nativeEvent.coordinate});
  // }

  onRegionChange=(region) => {
    this.setState({region});
  }

  onCustomerMarkerChanger(e){
    this.setState({ endLocation: e.nativeEvent.coordinate })
  }
  

  saveAddress() {}

  render() {
    return (
      <View style={styles.container}>
        <MapView 
          initialRegion={this.state.region} 
          region={this.state.region}
          onRegionChange={this.onRegionChange}
          style={styles.map} 
          onPress={e => this.onMapPress(e)} >
          <MapView.Marker
            coordinate={this.state.startLocation}
            title={"Restaurant"}
            description={"Restaurant"}
          /> 

          {/* <MapView.Marker
            draggable
            coordinate={this.state.endLocation}
            title={"Client location"}
            description={"Client location"}
            onDragEnd={(e) => this.onCustomerMarkerChanger(e)}
          />  */}
        </MapView> 
              
      </View>
    );
  }
}


const styles=StyleSheet.create({
  container:{
    flex:1
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})