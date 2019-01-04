
import React from 'react';
import { HeaderTab } from '../../headerTab/headerTab';
import { Image, Dimensions, Alert } from "react-native";
import {
  Container,
  Content,
  H3,
  Card,
  CardItem,
  Text,
  Body,
  View
} from "native-base";
import styles from "./styles";
import globalStyles from "../../theme/mclCommonStyles";

const deviceWidth = Dimensions.get("window").width;
const repasFaitMaison = require("../../../assets/images/repasfaitmaison-170x112.jpg");
const repasRestau = require('../../../assets/images/repasrestau-160x90.jpg')

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container >
        <HeaderTab title="Accueil" />
        <Content padder style={styles.container}>
          <Body style={[globalStyles.centerComponent,{ marginVertical:15}]}>
            <H3 style={{marginBottom :15}}>Bienvenue sur MCL</H3>
            <Text style={{textAlign:'center'}}>Que souhaitez-vous vous faire livrer aujourd'hui ?</Text>
          </Body>
          <Card style={styles.cardStyle}>
            <CardItem button onPress={() => this.props.navigation.navigate('Order')}>
              <Body style={globalStyles.centerComponent}>
                <Image
                  style={{
                    alignSelf: "center",
                    height: 150,
                    resizeMode: "cover",
                    width: deviceWidth / 1.18,
                    marginVertical: 5
                  }}
                  source={repasFaitMaison}
                />
                <Text note >
                Votre repas fait maison
                </Text>
              </Body>
            </CardItem>
            
          </Card>

          <Card style={[styles.cardStyle]}>
            
            <CardItem button onPress={() => Alert.alert('Vous pourrez commander dans votre restaurant très bientôt')}>
              <Body style={globalStyles.centerComponent}>
                <Image
                  style={{
                    alignSelf: "center",
                    height: 150,
                    resizeMode: "cover",
                    width: deviceWidth / 1.18,
                    marginVertical: 5
                  }}
                  source={repasRestau}
                />
                <Text note>
                Le repas de votre restaurant préféré.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
 
}