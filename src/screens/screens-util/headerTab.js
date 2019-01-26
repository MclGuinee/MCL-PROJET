import React from "react";
import PropTypes from "prop-types";
import { Header, Left, Body, Right, Title, Button, Icon } from "native-base";

export const HeaderTab = ({ title, headerHasTabs, displayArrow }) => (
  <Header hasTabs={headerHasTabs}>
    <Left>
      if({displayArrow})
      {
        <Button transparent onPress={() => this.props.navigation.goBack()}>
          <Icon name="arrow-back" />
        </Button>
      }
    </Left>
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right />
  </Header>
);

HeaderTab.propTypes = {
  title: PropTypes.string.isRequired,
  displayArrow: PropTypes.bool.isRequired,
  headerHasTabs: PropTypes.bool.isRequired
};

HeaderTab.defaultProps = {
  displayArrow: true,
  headerHasTabs: false
};
