import React from 'react';
import { Container,  Form, Item, Input,
  Text, Label, Button, Right } from 'native-base';
import  styles from "./styles";
import * as theme from "../../styles/theme";

  export default class LoginScreen extends React.Component {
    constructor() {
      super();
      this.state = {
          error: {
            email: "",
            password: ""
        }
      };

      // this.onSubmit = this.onSubmit.bind(this);
      // this.onSuccess = this.onSuccess.bind(this);
      // this.onError = this.onError.bind(this);
  }

    render() {
      return (
        <Container style={styles.container}>
          <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} />
          </Item>
          <Button transparent success style={styles.forgotPasswordAnchor}>
            <Text>Mot de passe oublié?</Text>
          </Button>
          <Button success  style={styles.loginBtn}>
            <Text>Se connecter</Text>
          </Button>
          <Container style={styles.newAccountAnchor}>
            <Text>Nouveau sur mcl?</Text>
            <Button transparent success  style={{color: theme.color.green}}>
              <Text>Créer un compte</Text>
            </Button>
          </Container>
        </Form>
        </Container>
      );
    }
}