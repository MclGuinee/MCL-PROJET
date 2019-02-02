/*Standards modules*/
import React from "react";
import { Dimensions, Alert } from "react-native";
import { Container, Content, Body, Card, CardItem, Text, Icon, Button, ListItem, Right, Form, Left } from "native-base";
import PropTypes from "prop-types";

/*Styles*/
import { styles } from "./styles";
import { commonStyles } from "../screens-util/commonStyles";

/*Constantes*/
const deviceWidth = Dimensions.get("window").width;

/*Component class */
export default class CustomerDeliveriesScreen extends React.Component {
  state = {
    availableOrders: [
      {
        deliveryId: "ccccccc",
        startAddressName: "Landreah, 28 septembre",
        startDistrict: "Cameroun hbkjhj qsdhsqjkd qsdhqs",
        endAddressName: "Chez mon mari",
        endDistrict: "Sans file",
        startAddressLatitude: 47.082892,
        startAddressLongitude: 2.396577999999977,
        endAddressLatitude: 47.082892,
        endAddressLongitude: 2.396577999999977,
        distanceInKM: "30",
        deliveryStartDateTime: "03-01-2019",
        customerId: "UID : refer to customerInformations collection",
        status: "ACCEPTED",
        delivererId: "UID: refer to deliverInformations collection ",
        deliveryPrice: 20000,
        deliveryFee: 1000,
        createDate: "01-01-2019",
        updateDate: "new Date()"
      },
      {
        deliveryId: "4566aaaa",
        startAddressName: "Coleah, chez ma deuxième femme",
        startDistrict: "Coleah",
        endAddressName: "ENTA, au travail",
        endDistrict: "ENTA",
        startAddressLatitude: 47.082892,
        startAddressLongitude: 2.396577999999977,
        endAddressLatitude: 47.082892,
        endAddressLongitude: 2.396577999999977,
        distanceInKM: "30",
        deliveryStartDateTime: "01-01-2019",
        customerId: "UID : refer to customerInformations collection",
        status: "ORDERED",
        delivererId: "UID: refer to deliverInformations collection ",
        deliveryPrice: 20000,
        deliveryFee: 1000,
        createDate: "10-01-2019",
        updateDate: "new Date()"
      },
    
      {
        deliveryId: "4566aaaa",
        startAddressName: "Cameroun cité",
        startDistrict: "Cameroun cité",
        endAddressName: "Madina",
        endDistrict: "Madina",
        startAddressLatitude: 47.082892,
        startAddressLongitude: 2.396577999999977,
        endAddressLatitude: 47.082892,
        endAddressLongitude: 2.396577999999977,
        distanceInKM: "30",
        deliveryStartDateTime: "01-01-2019",
        customerId: "UID : refer to customerInformations collection",
        status: "DELIVERED",
        delivererId: "UID: refer to deliverInformations collection ",
        deliveryPrice: 20000,
        deliveryFee: 1000,
        createDate: "10-01-2019",
        updateDate: "new Date()"
      }
    ]
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Content padder>
          {this.state.availableOrders.map((availableOrder, index) => {
            return (
              <Card style={commonStyles.cardStyle} key={index}>
                <CardItem header first>
                  <Left>
                    <Text note>Commandée pour le:</Text>
                    <Text style={styles.deliveryDate}>{availableOrder.deliveryStartDateTime}</Text>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Left>
                    <Text note>De:</Text>
                    <Text>{availableOrder.startDistrict}</Text>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Left>
                    <Text note>A:</Text>
                    <Text>{availableOrder.endDistrict}</Text>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Left>
                    <Text note>Prix:</Text>
                    <Text>{availableOrder.deliveryPrice + availableOrder.deliveryFee}</Text>
                    <Text note>FG</Text>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Left>
                    <Text note>Distance:</Text>
                    <Text>{availableOrder.distanceInKM}</Text>
                    <Text note>Km</Text>
                  </Left>
                </CardItem>

                <CardItem cardBody>
                  <Left>
                    <Text note>Livreur:</Text>
                    <Text>Alpha</Text>
                    <Text>Diallo</Text>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Left>
                    <Text note>Contact livreur:</Text>
                    <Text>62-26-85-69</Text>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Left>
                    <Text note>Etat livraison:</Text>
                    <Text>{availableOrder.status}</Text>
                  </Left>
                </CardItem>
                <CardItem footer last>
                  <Left />
                  <Body>
                    <Button success 
                    disabled={availableOrder.status=="DELIVERED"}
                    onPress={() => this.props.navigation.navigate("OrderAddressMap")}>
                      <Text>GEOLOCALISER LIVREUR</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            );
          })}
        </Content>
      </Container>
    );
  }
}
