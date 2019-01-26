import React from 'react';
import { HeaderTab } from "../screens-util/headerTab";
import { Image } from 'react-native';
import { Container, H1, H3, Content, Card, CardItem, Text, Body } from 'native-base';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <Container style={{flex: 1}}>
        {/* <HeaderTab title="PROFILE" headerHasTabs={false} displayArrow={false} /> */}
        <Content>
          <Card>
            <CardItem style={{flexDirection: 'column'}}>
              <Body style={{marginBottom: 20}}>
                <H1>Mohamed Camara</H1>
                <Text>mohamed27@gmail.com</Text>
              </Body>
              <Body style={{marginBottom: 20}}>
                <H3>Role</H3>
                <Text>Business man</Text>
              </Body>
              <Body style={{marginBottom: 20}}>
                <H3>Department</H3>
                <Text>Marketing et Business</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}