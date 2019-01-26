/*Standard modules */
import React from "react";

import { TextInput } from "react-native";
import { Container, Header, Content, Left, Right, Title, Separator, List, Form, Item, ListItem, Icon, Input, Picker, Body, Text, Label, Button } from "native-base";
import StepIndicator from "react-native-step-indicator";

/*Custom import*/
import { HeaderTab } from "../screens-util/headerTab";
import { stepIndicatorLabels, stepIndicatorStyles } from "../screens-util/stepIndicatorProperties";

/*Styles*/
import { styles } from "./styles";
import { commonStyles } from "../screens-util/commonStyles";

export default class CustomerOrdersListScreen extends React.Component {
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
            <Title>Commandes client</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Label>Liste des commandes du client sera vue ici</Label>
        </Content>
      </Container>
    );
  }
}
