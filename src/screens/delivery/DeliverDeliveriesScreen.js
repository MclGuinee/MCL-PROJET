/*Standards modules*/
import React from "react";
import { Dimensions, Alert } from "react-native";
import { Container, Content, Body, Card, CardItem, Text, Icon, Button, ListItem, Right, Form, Left } from "native-base";
import PropTypes from "prop-types";

/*Custom imports */
import { HeaderTab } from "../screens-util/headerTab";

/*Styles*/
import { styles } from "./styles";
import { commonStyles } from "../screens-util/commonStyles";

/*Constantes*/
const deviceWidth = Dimensions.get("window").width;

/*Component class */
export default class DeliverDeliveriesScreen extends React.Component {
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
      }
    ]
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Content padder>
          {this.state.availableOrders
            .filter(order => order.status === "ACCEPTED")
            .map((availableOrder, index) => {
              return (
                <Card style={commonStyles.cardStyle} key={index}>
                  <CardItem header first>
                    <Left>
                      <Text note>Livraison prévue le:</Text>
                      <Text style={styles.deliveryDate}>{availableOrder.deliveryStartDateTime}</Text>
                    </Left>
                    <Right style={{ marginRight: 15 }}>
                      <Button transparent success onPress={() => this.props.navigation.navigate("DisplayAddressesMap")}>
                        <Icon active name="navigate" style={commonStyles.mclIcon} />
                      </Button>
                    </Right>
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
                      <Text note>Client:</Text>
                      <Text>Moussa</Text>
                      <Text>Soumah</Text>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Left>
                      <Text note>Tel:</Text>
                      <Text>62-26-85-69</Text>
                    </Left>
                  </CardItem>
                  <CardItem footer last>
                    <Left />
                    <Body>
                      <Button
                        success
                        onPress={() =>
                          Alert.alert(
                            "Rénonciation de la livraison",
                            "Etes-vous sûr de vouloir rénoncier à cette livraison?",
                            [
                              {
                                text: "Non"
                              },
                              {
                                text: "Oui",
                               /* onPress: () => this.setState(availableOrder.status, "ORDERED")*/
                              }
                            ],
                            { cancelable: false }
                          )
                        }
                      >
                        <Text>RENONCER</Text>
                      </Button>
                    </Body>
                    <Right />
                  </CardItem>
                </Card>
              );
            })}
        </Content>
      </Container>
    );
  }
}

// Props to pass to children components
DeliverDeliveriesScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};
