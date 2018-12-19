
import React from 'react';
import { HeaderTab } from '../headerTab/headerTab';
import { TextInput} from 'react-native';
import { Container, Header, Content, Form, Item, ListItem, Input,
  CheckBox, Body, Text, Label, DatePicker, Button } from 'native-base';
  // import { Ionicons } from '@expo/vector-icons';
  export default class OrderScreen extends React.Component {
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
            <Label>Adresse Restaurant</Label>
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
            <Button success  
            style={{marginTop: 45, marginLeft: 100, color: '#03C136'}}
            onPress={() => this.props.navigation.navigate('Account')}>
            <Text>Commander</Text>
            </Button>
        </Form>
          </Content>
        </Container>
      );
    }
  }