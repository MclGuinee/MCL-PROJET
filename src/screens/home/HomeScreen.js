/*Standards modules*/
import React from "react";
import { Image, Dimensions, Alert } from "react-native";
import { Container, Content, H3, Toast, Button, Header, Left, Right, Title, Card, CardItem, Text, Body, Thumbnail } from "native-base";

/*Styles*/
import { styles } from "./styles";
import { commonStyles } from "../screens-util/commonStyles";

/*Constantes*/
const deviceWidth = Dimensions.get("window").width;
const repasFaitMaison = require("../../../assets/images/repasfaitmaison-170x112.jpg");
const repasRestau = require("../../../assets/images/repasrestau-160x90.jpg");

/*Component class */
export default class HomeScreen extends React.Component {

  render() {
    return (
      <Container style={styles.container}>       
        <Content padder>
          <Body style={[commonStyles.centerComponent, { marginVertical: 15 }]}>
            <H3 style={{ marginBottom: 15 }}>Bienvenue sur MCL</H3>
            <Text style={{ textAlign: "center" }}>Que souhaitez-vous vous faire livrer aujourd'hui ?</Text>
          </Body>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={repasFaitMaison} />
                <Body>
                  <Text>Votre repas fait maison</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody button onPress={() => this.props.navigation.navigate("Order")}>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 200,
                  flex: 1
                }}
                source={repasFaitMaison}
              />
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={repasRestau} />
                <Body>
                  <Text>Le repas de votre restaurant préféré.</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem
              cardBody
              button
              onPress={() => alert("Vous pourrez commander dans votre restaurant très bientôt.En attendant, vous pouvez commander votre répas fait maison.")}
            >
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 200,
                  flex: 1
                }}
                source={repasRestau}
              />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
