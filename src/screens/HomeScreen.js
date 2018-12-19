
import React from 'react';
import { HeaderTab } from '../headerTab/headerTab';
import { Image, Alert } from 'react-native';
import { Container, H1, H3, Content, Card, CardItem, Text, Body } from 'native-base';


export default class HomeScreen extends React.Component {
  render(){
    return (
      <Container style={{flex: 1}}>
        <HeaderTab title="Accueil" />
        <Content>
        
          <H1>Bienvenue sur MCL</H1>
          <H1>Que souhaitez-vous commander aujoourd'hui?</H1>
             
          <Card>
          <CardItem button onPress={() => this.props.navigation.navigate('Order')}>
              <Image style={{ resizeMode: 'cover' }} source={require('../images/repasfaitmaon-170x112.jpg')} /> 
             
              <Text>
                Votre repas fait maison
              </Text>              
          </CardItem>
          <CardItem button onPress={() => Alert.alert('Vous pourrez commander dans votre restaurant très bientôt')}>
              <Image style={{ resizeMode: 'cover' }} source={require('../images/repasrestau-160x90.jpg')} /> 
              <Text>
                Le repas de votre restaurant préféré.
              </Text>              
          </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}