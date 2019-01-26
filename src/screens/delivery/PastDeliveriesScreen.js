/*Standards modules*/
import React from "react";
import {Image, Dimensions, Alert} from "react-native";
import {
    Container,
    Content,
    Label,
    Card,
    CardItem,
    Text,
    Button,
    Body,
    Icon
} from "native-base";

/*Custom imports */
import {HeaderTab} from "../screens-util/headerTab";

/*Styles*/
import {styles} from "./styles";
import {commonStyles} from "../screens-util/commonStyles";

/*Constantes*/
const deviceWidth = Dimensions
    .get("window")
    .width;

/*Component class */
export default class PastDeliveriesScreen extends React.Component {
    state = {
        availableOrders: [
            {
                deliveryId: "ccccccc",
                startAddressName: "Landreah, 28 septembre",
                startDestrict: "Cameroun",
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
            }, {
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
                status: "ORDERED/ACCEPTED_BY_DELIVER/DELIVERED/PAIED",
                delivererId: "UID: refer to deliverInformations collection ",
                deliveryPrice: 20000,
                deliveryFee: 1000,
                createDate: "new Date()",
                updateDate: "new Date()"
            }
        ],
        pastOrders: [
            {
                deliveryId: "yyuuuiiii",
                startAddressName: "Sans fil, mon travail",
                startDistrict: "Kaloum",
                endAddressName: "Gbessia, pharmacie, chez mon oncle",
                endDistrict: "Gbessia",
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
            }, {
                deliveryId: "aaaabbbb",
                startAddressName: "Madina, niger",
                startDistrict: "Madina",
                endAddressName: "Bembeto",
                endDistrict: "Bembeto",
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
            }
        ]
    };

    render() {
        return (
            <Container style={styles.container}>
                <Content padder>
                    <Card
                        dataArray={this.state.availableOrders}
                        renderRow={availableOrder => (
                        <CardItem>
                            <Body style={commonStyles.horizontalComponents}>
                                <Label>De:</Label>
                                <Text note>{availableOrder.startDestrict}</Text>
                            </Body>
                            <Body style={commonStyles.horizontalComponents}>
                                <Label>A:</Label>
                                <Text note>{availableOrder.endDestrict}</Text>
                            </Body>
                            <Body style={commonStyles.horizontalComponents}>
                                <Label>Date:</Label>
                                <Text note>{availableOrder.deliveryStartDateTime}</Text>
                            </Body>
                            <Body style={commonStyles.horizontalComponents}>
                                <Label>Distance:</Label>
                                <Text note>{availableOrder.distanceInKM}</Text>
                            </Body>
                            <Body style={[commonStyles.horizontalComponents, commonStyles.btn]}>
                                <Button
                                    transparent
                                    success
                                    onPress={() => this.props.navigation.navigate("DisplayAddressesMap")}>
                                    <Icon active ios="ios-add-circle" android="md-add-circle"/>
                                </Button>
                                <Button
                                    success
                                    disabled={availableOrder.status != "ORDERED"}
                                    onPress={() => Alert.alert(
                                        "Acceptation livraison", "Acceptez-vous cette livraison?", 
                                        [{
                                                text: "Non"
                                        }, {
                                                text: "Oui"/*, onPress: () => setState(availableOrder.status:"ACCEPTED" */
                                            }], {cancelable: false}
                                        )
                                    }>
                                    <Text>ACCEPTER</Text>
                                </Button>
                            </Body>}
                        </CardItem>
                        )} />
                   </Content>
                   </Container>
        )
    }
}