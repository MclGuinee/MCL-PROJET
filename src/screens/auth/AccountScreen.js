/*Standart modules imports*/
import React from "react";
import { Container, Header, Content, Tab, Tabs, Left, Icon, Body, Title, Button, Right } from "native-base";
import StepIndicator from "react-native-step-indicator";
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

/*Custom imports*/
import LoginTab from "./LoginScreen";
import RegisterTab from "./RegisterScreen";
import { stepIndicatorLabels, stepIndicatorStyles } from "../screens-util/stepIndicatorProperties";


/*styles*/
import {styles} from "./styles";
import { commonStyles } from "../screens-util/commonStyles";

export default class AccountScreen extends React.Component {
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
        <Content style={commonStyles.stepIndicatorContent}>
          <StepIndicator customStyles={stepIndicatorStyles} currentPosition={1} labels={stepIndicatorLabels} stepCount={4} direction="horizontal" />

          <Tabs initialPage={this.state.activeTabValue} style={{marginTop:10}}>
            <Tab heading="Se connecter" style={styles.loginTab} >
              <LoginTab navigation={this.props.navigation}/>
            </Tab>
            <Tab heading="Créer un compte" style={styles.accountTab}>
              <RegisterTab navigation={this.props.navigation} />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
