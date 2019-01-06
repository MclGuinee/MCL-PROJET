/*Standard modules */
import React from "react";
import { HeaderTab } from "../../headerTab/headerTab";
import { TextInput } from "react-native";
import DatePicker from "react-native-datepicker";
import { Container, Header, Content, Left, Right, Title, Form, Item, ListItem, Icon, Input, Picker, Body, Text, Label, Button } from "native-base";
import StepIndicator from "react-native-step-indicator";

/*Styles*/
import styles from "./styles";
import { globalColors, commonStyles } from "../screens-util/commonStyles";

/*Custom imports*/
import { stepIndicatorLabels, stepIndicatorStyles } from "../screens-util/stepIndicatorProperties";

export default class OrderScreen extends React.Component {
  state = {
    selected: null,
    addresses: [],
    deliveryDate: new Date()
  };

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Commande</Title>
          </Body>
          <Right />
        </Header>

        <Content>
            <StepIndicator customStyles={stepIndicatorStyles} currentPosition={0} labels={stepIndicatorLabels} stepCount={4} direction="horizontal" />
          <Form>
            <Item>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                placeholderIconColor={globalColors.green}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Adresse d'enlèvement" value={null} />
                <Picker.Item label="Adresse 1" value="key0" />
                <Picker.Item label="Adresse 2" value="key1" />
                <Picker.Item label="Adresse 3" value="key2" />
                <Picker.Item label="Adresse 4" value="key3" />
                <Picker.Item label="Adresse 5" value="key4" />
                {/* {this.props.addresses.map((item, index) => {
                  return <Picker.Item key={index} label={item} value={item} />;
                })} */}
              </Picker>
              <Button
                transparent
                success
                //onPress={() => this.props.navigation.navigate('addressMap')}
              >
                <Icon active ios="ios-add-circle" android="md-add-circle" />
              </Button>
            </Item>
            <Item>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                placeholderIconColor={globalColors.green}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Adresse de livraison" value={null} />
                <Picker.Item label="Adresse 1" value="key0" />
                <Picker.Item label="Adresse 2" value="key1" />
                <Picker.Item label="Adresse 3" value="key2" />
                <Picker.Item label="Adresse 4" value="key3" />
                <Picker.Item label="Adresse 5" value="key4" />
                {/* {this.props.addresses.map((item, index) => {
                  return <Picker.Item key={index} label={item} value={item} />;
                })} */}
              </Picker>
              <Button
                transparent
                success
                //onPress={() => this.props.navigation.navigate('addressMap')}
              >
                <Icon active ios="ios-add-circle" android="md-add-circle" />
              </Button>
            </Item>
            <Item>
              <Icon ios="ios-phone-portrait" android="md-phone-portrait" style={[{ fontSize: 30, marginVertical: 10 }, globalColors.green]} />
              <TextInput keyboardType="number-pad" placeholder="Mobile : 622000000" />
            </Item>
            <Item last>
              <Label>Date d'enlèvement: </Label>

              <DatePicker
                style={{ width: 200 }}
                date={this.state.deliveryDate}
                mode="datetime"
                placeholder="select date"
                format="DD-MM-YYYY hh:mm"
                is24Hour={true}
                minDate="2019-01-01"
                maxDate="2030-12-01"
                confirmBtnText="OK"
                cancelBtnText="Annuler"
                customStyles={{
                  dateIcon: {
                    //position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                    marginRight: 5
                  },
                  dateInput: {
                    marginLeft: 5,
                    borderWidth: 0,
                    padding: 2,
                    alignItems: "flex-start"
                  }
                }}
                onDateChange={date => {
                  this.setState({ deliveryDate: date });
                }}
              />
            </Item>
            <Body style={[commonStyles.centerComponent, commonStyles.btn]}>
              <Button success onPress={() => this.props.navigation.navigate("OrderSummary")}>
                <Text>COMMANDER</Text>
              </Button>
            </Body>
          </Form>
        </Content>
      </Container>
    );
  }
}
