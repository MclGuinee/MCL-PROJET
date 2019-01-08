/*Standard modules */
import React from "react";

import { TextInput } from "react-native";
import { Container, Header, Content, Left, Right, Title, Separator, List, Form, Item, ListItem, Icon, Input, Picker, Body, Text, Label, Button } from "native-base";
import StepIndicator from "react-native-step-indicator";

/*Custom import*/
import { HeaderTab } from "../../headerTab/headerTab";
import { stepIndicatorLabels, stepIndicatorStyles } from "../screens-util/stepIndicatorProperties";

/*Styles*/
import { styles } from "./styles";
import { globalColors, commonStyles } from "../screens-util/commonStyles";

export default class OrderSummaryScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Récapitulatif</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <StepIndicator customStyles={stepIndicatorStyles} currentPosition={0} labels={stepIndicatorLabels} stepCount={4} direction="horizontal" />
          <List>
            <ListItem itemDivider>
              <Text>Adresses</Text>
            </ListItem>
            <ListItem>
              <Label>Adresse d'enlèvement:</Label>
              <Text>Domicile</Text>
            </ListItem>
            <ListItem>
              <Text>Adresse de livraison:</Text>
              <Text>Bureau</Text>
            </ListItem>
            <ListItem>
              <Text>Distance:</Text>
              <Text>30</Text>
              <Text>KM</Text>
            </ListItem>
            <ListItem last>
              <Text>Date et heure d'enlèvement:</Text>
              <Text>01 01 2019 12h00</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Prestation</Text>
            </ListItem>
            <ListItem>
              <Text>Coût de livraison:</Text>
              <Text>15000</Text>
              <Text>FG</Text>
            </ListItem>
            <ListItem>
              <Text>Frais de livraison:</Text>
              <Text>5000</Text>
              <Text>FG</Text>
            </ListItem>
            <ListItem last>
              <Text>Total:</Text>
              <Text>20000</Text>
              <Text>FG</Text>
            </ListItem>
          </List>
          <Body style={[commonStyles.centerComponent, commonStyles.btn]}>
            <Button success onPress={() => this.props.navigation.navigate("Account")}>
              <Text>COMMANDER</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}
