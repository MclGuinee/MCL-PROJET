/*Standards modules*/
import React from "react";
import { Dimensions, Alert } from "react-native";
import { Container, Content, Body, Card, CardItem, Text, Icon, Button, ListItem, Right, Form, Left } from "native-base";

/*Custom imports */
import { HeaderTab } from "../screens-util/headerTab";

/*Styles*/
import { styles } from "./styles";
import { commonStyles } from "../screens-util/commonStyles";

/*Constantes*/
const deviceWidth = Dimensions.get("window").width;

/*Component class */
export default class AvailableDeliveriesScreen extends React.Component {
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
        deliveryStartDateTime: "03-01-2019",
        customerId: "UID : refer to customerInformations collection",
        status: "ORDERED/ACCEPTED_BY_DELIVER/DELIVERED/PAIED",
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
      }
    ]
  };

  render() {
    return (
      <Container>
        <Content padder>
          {this.state.availableOrders.map((availableOrder, index) => {
            return (
              <Card style={commonStyles.cardStyle} key={index}>
                <CardItem header>
                  <Left>
                    <Text note style={commonStyles.textLabel}>
                      Livraison prévue le:
                    </Text>
                    <Text style={styles.deliveryDate}>{availableOrder.deliveryStartDateTime}</Text>
                  </Left>
                </CardItem>
                <CardItem>
                  <Text note style={commonStyles.textLabel}>
                    De:
                  </Text>
                  <Text>{availableOrder.startDistrict}</Text>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text note style={commonStyles.textLabel}>
                      A:
                    </Text>
                    <Text>{availableOrder.endDistrict}</Text>
                  </Left>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text note style={commonStyles.textLabel}>
                      Distance:
                    </Text>
                    <Text>{availableOrder.distanceInKM}</Text>
                  </Left>
                </CardItem>
                <CardItem footer>
                  <Left />
                  <Body>
                    <Button
                      success
                      disabled={availableOrder.status == "ORDERED"}
                      onPress={() =>
                        Alert.alert(
                          "Acceptation livraison",
                          "Acceptez-vous cette livraison?",
                          [
                            {
                              text: "Non"
                            },
                            {
                              text: "Oui",
                              onPress: () => setState(availableOrder.status, "ACCEPTED")
                            }
                          ],
                          { cancelable: false }
                        )
                      }
                    >
                      <Text>ACCEPTER</Text>
                    </Button>
                  </Body>
                  <Right>
                    <Button transparent success onPress={() => this.props.navigation.navigate("DisplayAddressesMap")}>
                      <Icon active name="navigate" style={commonStyles.mclIcon} />
                    </Button>
                  </Right>
                </CardItem>
              </Card>
            );
          })}
        </Content>
      </Container>
    );
  }
}
