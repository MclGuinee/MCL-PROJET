import React from "react";
import { Container, Content, Form, Item, Input, Text, Label, Button, Right, Body,Toast, Header, Left, Icon, Title } from "native-base";
import { styles } from "./styles";
import {  commonStyles } from "../screens-util/commonStyles";

export default class ForgotPwdScreen extends React.Component {
  // state = {
  //   showToast: false
  // }

  render() {
    return (
      <Container style={styles.container}>
       
        <Content padder>
          <Body style={[commonStyles.centerComponent, { marginVertical: 15}]}>
            <Text>Vous avez oublié votre mot de passe! </Text>
            <Text>
              Pas de panique, saisisser votre adresse email, nous allons vous envoyer un nouveau mot de passe. Vous vous connectez avec ce nouveau mot de passe et le changer plus
              tard dans votre profil.
            </Text>
          </Body>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>

            <Body style={[commonStyles.centerComponent, commonStyles.btn]}>
              <Button
                success
                onPress={() =>
                  // Toast.show({
                  //   text: "Nouveau mot de passe généré et envoyé à test@test.fr",
                  //   buttonText: "OK",
                  //   position: "top",
                  //   type: "success"                   
                  // })
                  alert("Mot de passe envoyé!")
                }
              >
                <Text>ENVOYER</Text>
              </Button>
            </Body>
          </Form>
        </Content>
      </Container>
    );
  }
}
