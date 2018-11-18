import React from 'react';
import PropTypes from 'prop-types';
import { Header, Left, Body, Right, Title } from 'native-base';

export const HeaderTab = ({ title }) => (

  <Header>
    <Left/>
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right />
  </Header>
);

HeaderTab.propTypes = {
  title: PropTypes.string.isRequired,
};
