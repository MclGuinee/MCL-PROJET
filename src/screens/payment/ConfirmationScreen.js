/*Standard modules */
import React from "react";

import { Container, Header, Content, Left, Right, Title, Separator, List, Form, Item, ListItem, Icon, Input, Picker, Body, Text, Label, Button } from "native-base";
import StepIndicator from "react-native-step-indicator";

/*Custom import*/
import { stepIndicatorLabels, stepIndicatorStyles } from "../screens-util/stepIndicatorProperties";

/*Styles*/
import { styles } from "./styles";
import { commonStyles } from "../screens-util/commonStyles";
import { View } from "native-base";

export default class ConfirmationScreen extends React.Component {
  displayPaymentOkMsg() {
    return (
      <View>
        <Text style={{ marginVertical: 10, color: "#5cb85c", textAlign: "center" }}>Paiement effectué avec succès</Text>

        <Text style={{ textAlign: "center" }}>
          Votre commande a été validée. Le livreur va pouvoir la prendre en charge. Une fois effectuée, les coordonnées du livreur vous seront communiquées par une alerte et SMS.
        </Text>
      </View>
    );
  }

  displayPaymentKoMsg() {
    return (
      <View>
        <Text style={{ marginVertical: 10, color: "red", textAlign: "center" }}>Paiement refusé</Text>
        <Text style={{ textAlign: "center" }}>Le paiement a été refusé par votre banque. Merci de vérifier les informations bancaires précédemment saisies.</Text>
      </View>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <StepIndicator customStyles={stepIndicatorStyles} currentPosition={3} labels={stepIndicatorLabels} stepCount={4} direction="horizontal" />

          {true ? this.displayPaymentOkMsg() : this.displayPaymentKoMsg()}

          <Text style={{ marginVertical: 10, alignSelf: "center" }}>Vous pouvez nous contacter sur notre adresse e-mail pour tout problème lié à votre livraison.</Text>

          <Body style={{ color: "#5cb85c" }}>
            <Text style={{ fontWeight: "bold" }}>mclguinee@gmail.com</Text>
          </Body>
          <Body style={[commonStyles.centerComponent, commonStyles.btn]}>
            <Button success onPress={() => this.props.navigation.navigate("CustomerOrdersList")}>
              <Text>SUIVI COMMANDE</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}
