/*Standart modules imports*/
import React from "react";
import { HeaderTab } from "../screens-util/headerTab";
import { Container, Header, Content, Tab, Tabs, Left, Icon, Body, Title, Button, Right } from "native-base";
import StepIndicator from "react-native-step-indicator";
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

/*Custom imports*/
import AvailableDeliveriesScreen from "./AvailableDeliveriesScreen";
import DeliverDeliveriesScreen from "./DeliverDeliveriesScreen";


/*styles*/
import {styles} from "./styles";

export default class DeliveriesScreen extends React.Component {
  state = {
    activeTabValue: 0,    
    navigation: this.props.navigation
  };
  changeActiveTab = () => {
    if (this.state.Option == 0) {
      this.setState({ activeTabValue: 1 });
    } else this.setState({ activeTabValue: 0 });
  };

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
            <Title>Livraisons</Title>
          </Body>
          <Right />
        </Header>
        <Content>

          <Tabs>
            <Tab heading="Livraisons disponibles"  >
              <AvailableDeliveriesScreen navigation={this.props.navigation}/>
            </Tab>
            <Tab heading="Livraisons à faire" >
              <DeliverDeliveriesScreen navigation={this.props.navigation} />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
