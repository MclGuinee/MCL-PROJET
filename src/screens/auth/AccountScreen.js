import React from 'react';
import { HeaderTab } from '../../headerTab/headerTab';
import { Container, Header, Content, Tab,Tabs } from 'native-base';
import LoginTab from './LoginScreen';
import RegisterTab from './RegisterScreen'; 
import styles from "./styles";

export default class AccountScreen extends React.Component {
   
    render() {
      return (
        <Container style={styles.container}>
            <HeaderTab title="Accueil" />
        <Content>
              <Header hasTabs style={styles.accountTab} />
              <Tabs>
                <Tab heading="Se connecter" style={styles.loginTab}>
                  <LoginTab />
                </Tab>
                <Tab heading="Créer un compte" style={styles.accountTab}>
                  <RegisterTab />
                </Tab>         
              </Tabs>     
              </Content>
        </Container>
      );
    }
  }