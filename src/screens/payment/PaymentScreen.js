/*Standard modules */
import React from "react";

import { Container, Header, Content, Left, Right, Title, Separator, List, Form, Item, ListItem, Icon, Input, Picker, Body, Text, Label, Button } from "native-base";
import StepIndicator from "react-native-step-indicator";

/*Custom import*/
import { HeaderTab } from "../screens-util/headerTab";
import { stepIndicatorLabels, stepIndicatorStyles } from "../screens-util/stepIndicatorProperties";

/*Styles*/
import { styles } from "./styles";
import { globalColors, commonStyles } from "../screens-util/commonStyles";
import { View } from 'native-base';

export default class PaymentScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Paiement</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <StepIndicator customStyles={stepIndicatorStyles} currentPosition={2} labels={stepIndicatorLabels} stepCount={4} direction="horizontal" />
          <View style={commonStyles.line}>
            <Text>Paiement par orange money</Text>
          </View>
          <Form>
            <Item floatingLabel>
              <Label>Nom*</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Prénom*</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Numéro mobile orange*</Label>
              <Input />
            </Item>
          </Form>

          <Body style={[commonStyles.centerComponent, commonStyles.btn]}>
            <Button success onPress={() => this.props.navigation.navigate("Confirmation")}>
              <Text>PAYER</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}
