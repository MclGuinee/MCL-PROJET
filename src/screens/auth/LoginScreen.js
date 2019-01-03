import React from 'react';
import { Container,  Form, Item, Input,
  Text, Label, Button, Right } from 'native-base';
import  styles from "./styles";

  export default class LoginScreen extends React.Component {
    state = {
            email: "",
            password: ""
        }
       
    render() {
      return (
          <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Mot de passe</Label>
            <Input secureTextEntry={true} />
          </Item>
          {/* <Button transparent  
          style={styles.forgotPasswordAnchor} 
          onPress={() => this.props.navigation.navigate('login')}>
            <Text>Mot de passe oublié ?</Text>
          </Button> */}
          
        <Button success  >
          <Text>Se connecter </Text>
        </Button>         
      
        <Text>Nouveau sur mcl?</Text>
        <Button transparent   onPress={() => this.changeActiveTab() }> 
          <Text>Créer un compte</Text>
        </Button>
          
        </Form>
      );
    }
}