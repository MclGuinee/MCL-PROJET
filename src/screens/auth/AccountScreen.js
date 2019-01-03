import React from "react";
import { HeaderTab } from "../../headerTab/headerTab";
import { Container, Header, Content, Tab, Tabs, Left, Icon, Body, Title, Button, Right } from "native-base";
import LoginTab from "./LoginScreen";
import RegisterTab from "./RegisterScreen";
import styles from "./styles";

export default class AccountScreen extends React.Component {
  state = {
    activeTabValue: 0
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
            <Title>Connexion</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Tabs initialPage={this.state.activeTabValue}>
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
