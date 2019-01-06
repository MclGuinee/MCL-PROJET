import React from "react";
import { Container, Content, Form, Item, Input, Text, Label, Button, Right, Body, Header, Left, Icon, Title, H3 } from "native-base";
import styles from "./styles";
import  {globalColors, commonStyles} from "../screens-util/commonStyles"

export default class ForgotPwdScreen extends React.Component {
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
            <Title>Mot de passe oublié</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Body style={[commonStyles.centerComponent, { marginVertical: 15 , textAlign:'center'}]}>
            <H3>Vous avez oublié votre mot de passe! </H3>
            <H3>
              Pas de panique, saisisser votre adresse email, nous allons vous envoyer un nouveau mot de passe. Vous vous connectez avec ce nouveau mot de passe et le changer plus
              tard dans votre profil.
            </H3>
          </Body>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>

            <Body style={[commonStyles.centerComponent]}>
              <Button success onPress={() => Alert.alert("Nouveau mot de passe généré et envoyé à test@test.fr")}>
                <Text>Mot de passe oublié?</Text>
              </Button>
            </Body>
          </Form>
        </Content>
      </Container>
    );
  }
}
