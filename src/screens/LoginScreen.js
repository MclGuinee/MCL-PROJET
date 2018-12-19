import React from 'react';
import { TextInput} from 'react-native';
import { Container,  Form, Item, Input,
  Text, Label, Button } from 'native-base';
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
        <Container style={{flex: 1}}>
          <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} />
          </Item>
          <Item>
            <Text>Mot de passe oublié?</Text>
          </Item>
          <Button success  style={{marginTop: 45, marginLeft: 100, color: '#03C136'}}>
            <Text>Se connecter</Text>
          </Button>
        </Form>
        </Container>
      );
    }
  }