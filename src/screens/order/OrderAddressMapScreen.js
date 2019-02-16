import React, {Component} from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const {width,height} = Dimensions.get('window')

class OrderAddressMapScreen extends Component{
    constructor() {
        super();
        this.state = {
            region: {
                latitude: "",
                longitude: "",
                latitudeDelta:"",
                longitudeDelta:"",
                accuracy:"67",
                }
    }

  }

    calDelta(lat,long,accuracy){
       const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
       const latDelta =accuracy / oneDegreeOfLatitudeInMeters;
       const longDelta = accuracy / (oneDegreeOfLatitudeInMeters * Math.cos(lat * (Math.PI / 180)));

        this.setState({
            region:{
              latitude:lat,
              longitude:long,
              latitudeDelta:latDelta,
              longitudeDelta:longDelta,
              accuracy:accuracy,
              },
            });
    }

    componentWillMount(){

      this.calDelta(9.51706,-13.6998,5); //coordonnées GPS Conakry

    // this.watchID = navigator.geolocation.watchPosition((position)=>
    //        {
    //         const lat = position.coords.latitude;
    //         const long = position.coords.longitude;
    //         const accuracy = position.coords.accuracy;
               
    //         this.calDelta(lat,long,accuracy)
    //     },

    //     (error)=>{
    //           console.log(error.message)
    //     },
    //     {enableHighAccuracy:true,timeout:20000,maximumAge:1000,}
    //   )
   }

  componentWillUnmount(){
      //navigator.geolocation.clearWatch(this.watchID)
  }

  marker(){
      return {
          latitude:this.state.region.latitude,
          longitude:this.state.region.longitude
      }
  }

    render(){
        console.log(this.state.region)
        return(
              <View style={styles.container}> 
                {this.state.region.latitude ? 
                <MapView 
                provider={PROVIDER_GOOGLE}
                 style={styles.map}
                 initialRegion={this.state.region}
                 showsUserLocation={true}
                  >
                 {/* <MapView.Marker
                    coordinate={this.marker()}
                    title="You"
                    description="You are here!"
                    pinColor='green'
                 />
                  */}
                </MapView>
                : <Text>cordinates not found</Text> }
              
               
              </View>
          
           )

    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    map: {
        width:width,
        height:height,
        flex: 1
        }
});

export default OrderAddressMapScreen;