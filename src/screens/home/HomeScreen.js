
import React from 'react';
import { HeaderTab } from '../../headerTab/headerTab';
import { Image, Dimensions, Alert } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  H1,H2,H3,
  Card,
  CardItem,
  Text,
  Left,
  Right,
  Body,
  View
} from "native-base";
import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const repasFaitMaison = require("../../../assets/images/repasfaitmaison-170x112.jpg");
const repasRestau = require('../../../assets/images/repasrestau-160x90.jpg')

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <HeaderTab title="Accueil" />
        <Content padder>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical:15
        }}>
          <H3 style={{marginBotton :15}}>Bienvenue sur MCL, votre livreur de repas</H3>
          <Text>Que souhaitez-vous commander aujourd'hui ?</Text>
          </View>
          <Card style={[styles.mb]}>
            <CardItem button onPress={() => this.props.navigation.navigate('Order')}>
              <Body>
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
                <Text note>
                Votre repas fait maison
                </Text>
              </Body>
            </CardItem>
            
          </Card>

          <Card style={[styles.mb]}>
            
            <CardItem button onPress={() => Alert.alert('Vous pourrez commander dans votre restaurant très bientôt')}>
              <Body>
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
                <Text notes>
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