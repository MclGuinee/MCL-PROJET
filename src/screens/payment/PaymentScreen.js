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

export default class PaymentScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content style={commonStyles.stepIndicatorContent} padder>
          <StepIndicator customStyles={stepIndicatorStyles} currentPosition={2} labels={stepIndicatorLabels} stepCount={4} direction="horizontal" />

          <Form>
            <Text style={{ fontWeight: "bold", marginTop: 10,alignSelf:"center" }}>Paiement par orange money</Text>

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
