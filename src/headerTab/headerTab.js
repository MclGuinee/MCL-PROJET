import React from 'react';
import PropTypes from 'prop-types';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base';

export const HeaderTab = ({ title }) => (

  <Header>
    <Left>
      <Button transparent onPress={() => this.props.navigation.goBack()}>
          <Icon name="arrow-back" />
      </Button>
    </Left>
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right />
  </Header>
);

HeaderTab.propTypes = {
  title: PropTypes.string.isRequired,
};
