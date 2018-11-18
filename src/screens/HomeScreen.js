
import React from 'react';
  import { HeaderTab } from '../headerTab/headerTab';
  import { Image } from 'react-native';
  import { Container, H1, H3, Content, Card, CardItem, Text, Body } from 'native-base';
  
  export default class HomeScreen extends React.Component {
    render() {
      return (
        <Container style={{flex: 1}}>
          <HeaderTab title="Profile" />
  
          <Content>
            <Text>Salut MCL</Text>
          </Content>
        </Container>
      );
    }
  }