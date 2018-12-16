
import React from 'react';
import { HeaderTab } from '../headerTab/headerTab';
import { TextInput} from 'react-native';
import { Container, Header, Content, Form, Item, ListItem, Input,
  CheckBox, Body, Text, Label, DatePicker, Button } from 'native-base';
  // import { Ionicons } from '@expo/vector-icons';
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
          <HeaderTab title="Commande" />
  
          <Content>
          <Form>
          <Item floatingLabel>
            <Label>Adresse Restaurand</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Adresse Livraison</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Phone</Label>
            <TextInput keyboardType = 'number-pad'/> 
          </Item>
          <Item>
          <Label>Date d'enlevement</Label>
            <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"fr"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={true}
            animationType={"fade"}
            androidMode={"default"}
            textStyle={{ color: "grey" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }} /> 
            </Item>
            <ListItem button onPress={() => this.toggleCheckBox()}> 
            <CheckBox 
             checked={this.state.isAllerRoundTrip}
             color="green"
             name="checkbox-outline"
             ios="ios-checkbox-outline" md="md-checkbox-outline"
             onPress={() => this.toggleCheckBox()}/>
            <Body>
              <Text>Je Souhaite un aller-retour</Text>
            </Body>
            </ListItem>
            <Button success  style={{marginTop: 45, marginLeft: 100, color: '#03C136'}}>
            <Text>Commander</Text>
            </Button>
        </Form>
          </Content>
        </Container>
      );
    }
  }