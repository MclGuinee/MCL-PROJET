/*Standard modules */
import React from "react";

import { TextInput } from "react-native";
import { Container, Header, Content, Left, Right, Title, Separator, List, Form, Item, ListItem, Icon, Input, Picker, Body, Text, Label, Button } from "native-base";
import StepIndicator from "react-native-step-indicator";

/*Custom import*/
import { stepIndicatorLabels, stepIndicatorStyles } from "../screens-util/stepIndicatorProperties";

/*Styles*/
import { styles } from "./styles";
import { commonStyles } from "../screens-util/commonStyles";

export default class OrderSummaryScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <StepIndicator customStyles={stepIndicatorStyles} currentPosition={0} labels={stepIndicatorLabels} stepCount={4} direction="horizontal" />
          <List>
            <ListItem itemDivider>
              <Text>Informations de livraison</Text>
            </ListItem>
            <ListItem>
              <Label>De:</Label>
              <Text>Domicile</Text>
            </ListItem>
            <ListItem>
              <Text>A:</Text>
              <Text>Bureau</Text>
            </ListItem>
            <ListItem last>
              <Text>Le : </Text>
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
              <Text>Frais MCL:</Text>
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
