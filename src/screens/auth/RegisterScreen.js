import { Ionicons } from "@expo/vector-icons";
import { Button, Container, Content, Form, Input, Item, Label, Text , Body} from "native-base";
import React from "react";
import  {globalColors, commonStyles} from "../screens-util/commonStyles"

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
              <Label>Email*</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Mot de passe* </Label>
              <Input secureTextEntry={true} />
            </Item>
            <Item floatingLabel last>
              <Label>Confirmer le mot de passe * </Label>
              <Input secureTextEntry={true} />
            </Item>

            <Body style={[commonStyles.centerComponent, commonStyles.btn]}>
              <Button success>
                <Text>VALIDER</Text>
              </Button>
            </Body>
          </Form>
        </Content>
      </Container>
    );
  }
}
