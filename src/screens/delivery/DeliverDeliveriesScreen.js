/*Standards modules*/
import React from "react";
import { Image, Dimensions, Alert } from "react-native";
import { Container, Content, Item, Card, CardItem, Text, Icon, Button, ListItem, Right, Form, Left } from "native-base";

/*Custom imports */
import { HeaderTab } from "../screens-util/headerTab";

/*Styles*/
import { styles } from "./styles";
import { commonStyles } from "../screens-util/commonStyles";
import { Body } from "native-base";

/*Constantes*/
const deviceWidth = Dimensions.get("window").width;

/*Component class */
export default class DeliverDeliveriesScreen extends React.Component {
  state = {
    availableOrders: [
      {
        deliveryId: "ccccccc",
        startAddressName: "Landreah, 28 septembre",
        startDistrict: "Cameroun",
        endAddressName: "Chez mon mari",
        endDistrict: "Sans file",
        startAddressLatitude: 47.082892,
        startAddressLongitude: 2.396577999999977,
        endAddressLatitude: 47.082892,
        endAddressLongitude: 2.396577999999977,
        distanceInKM: "30",
        deliveryStartDateTime: "new Date()",
        customerId: "UID : refer to customerInformations collection",
        status: "ORDERED/ACCEPTED_BY_DELIVER/DELIVERED/PAIED",
        delivererId: "UID: refer to deliverInformations collection ",
        deliveryPrice: 20000,
        deliveryFee: 1000,
        createDate: "new Date()",
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
        deliveryStartDateTime: "new Date()",
        customerId: "UID : refer to customerInformations collection",
        status: "ORDERED",
        delivererId: "UID: refer to deliverInformations collection ",
        deliveryPrice: 20000,
        deliveryFee: 1000,
        createDate: "new Date()",
        updateDate: "new Date()"
      }
    ]
  };

  render() {
    return (
      <Container>
        <Content>

<Text>Liste des livraions du livreur connecté</Text>
        </Content>
      </Container>
    );
  }
}
