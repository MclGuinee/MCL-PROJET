import React from 'react';
import { HeaderTab } from '../headerTab/headerTab';
import { Container, Header, Content, Tab,Tabs } from 'native-base';
import LoginTab from './LoginScreen';
import RegisterTab from './RegisterScreen'; 
export default class AccountScreen extends React.Component {
   
    render() {
      return (
        <Container style={{flex: 1}}>
          <HeaderTab title="Authentification" />  
          <Content>
            <Container>
              <Header hasTabs />
              <Tabs>
                <Tab heading="Se connecter">
                  <LoginTab />
                </Tab>
                <Tab heading="Créer un compte">
                  <RegisterTab />
                </Tab>         
              </Tabs>
            </Container>
          </Content>
        </Container>
      );
    }
  }