import React from "react";
import { Container, Form, Item, Input, Text, Label, Button, Right, View, Body } from "native-base";
import  {globalColors, commonStyles} from "../screens-util/commonStyles"

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

        <Body style={[commonStyles.centerComponent, commonStyles.btn]}>
          <Button success
          onPress={() => props.navigation.navigate("Payment")}>
            <Text>Se connecter </Text>
          </Button>
        </Body>

        <Body style={[commonStyles.rightComponent, commonStyles.btn]}>
          <Button transparent success onPress={() => this.props.navigation.navigate("ForgotPwd")}>
            <Text>Mot de passe oublié?</Text>
          </Button>
        </Body>
      </Form>
    );
  }
}
