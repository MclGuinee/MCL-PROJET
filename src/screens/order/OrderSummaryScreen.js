/*Standard modules */
import React from "react";

import { TextInput } from "react-native";
import { Container, Header, Content, Left, Right, Title, Form, Item, ListItem, Icon, Input, Picker, Body, Text, Label, Button } from "native-base";
import StepIndicator from 'react-native-step-indicator';

/*Custom import*/
import { HeaderTab } from "../../headerTab/headerTab";
import { stepIndicatorLabels, stepIndicatorStyles } from "../screens-util/stepIndicatorProperties";


/*Styles*/
import styles from "./styles";
import  {globalColors, commonStyles} from "../screens-util/commonStyles"




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
