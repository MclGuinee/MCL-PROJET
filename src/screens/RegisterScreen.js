import React from 'react';
import { TextInput} from 'react-native';
import { Container, Header, Content, Form, Item, ListItem, Input,
  CheckBox, Body, Text, Label, DatePicker, Button } from 'native-base';
  export default class HomeScreen extends React.Component {
    state = {
      isAllerRoundTrip: false,
    }
    toggleCheckBox = () => {
      this.setState({isAllerRoundTrip: !this.state.isAllerRoundTrip})
    }
    render() {
      return (
        <Container style={{flex: 1}}>
          
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Todo</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Todo 2</Label>
                <Input />
              </Item>          
            </Form>
          </Content>
        </Container>
      );
    }
  }