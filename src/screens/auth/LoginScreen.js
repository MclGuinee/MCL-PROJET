import React from "react";
import { Container, Form, Item, Input, Text, Label, Button, Right, View, Body } from "native-base";
import styles from "./styles";
import globalStyles from "./../../theme/mclCommonStyles"

export default class LoginScreen extends React.Component {

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

        <Body style={[globalStyles.rightComponent,globalStyles.btn]}>
          <Button transparent success 
          onPress={() => this.props.navigation.navigate('ForgotPassword')} >
            <Text>Mot de passe oublié?</Text>
          </Button>
        </Body>
        <Body style={[globalStyles.centerComponent, globalStyles.btn]}>
          <Button success>
            <Text>Se connecter </Text>
          </Button>
        </Body>
        <Body style={[globalStyles.centerComponent, { flexDirection: "row" }]}>
          <Text>Nouveau sur mcl?</Text>
          <Button transparent success onPress={() => this.changeActiveTab()}>
            <Text style={{ paddingLeft: 5 }}>Créer un compte</Text>
          </Button>
        </Body>
      </Form>
    );
  }
}
