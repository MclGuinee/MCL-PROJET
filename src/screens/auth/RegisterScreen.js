import { Ionicons } from "@expo/vector-icons";
import { Button, Container, Content, Form, Input, Item, Label, Text } from "native-base";
import React from "react";

export default class RegisterScreen extends React.Component {
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nom *</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Prénom*</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Ionicons name="md-at" />
              <Input />
            </Item>
            <Item floatingLabel>
              {/* <Ionicons  name="md-phone" /> */}
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Mot de passe * </Label>
              <Input secureTextEntry={true} />
            </Item>
            <Item floatingLabel last>
              <Label>Confirmer le mot de passe * </Label>
              <Input secureTextEntry={true} />
            </Item>

            <Button success>
              <Text>VALIDER</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
