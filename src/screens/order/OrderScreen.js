/*Standard modules */
import React from "react";
import { TextInput } from "react-native";
import DatePicker from "react-native-datepicker";
import { Container, Header, Content, Left, Right, Title, Form, Item, ListItem, Icon, Input, Picker, Body, Text, Label, Button } from "native-base";
import StepIndicator from "react-native-step-indicator";
import DeviceInfo from "react-native-device-info";

/*Styles*/
import { styles } from "./styles";
import { commonStyles } from "../screens-util/commonStyles";
import { mclColors } from "../screens-util/mclColors";

/*Custom imports*/
import { stepIndicatorLabels, stepIndicatorStyles } from "../screens-util/stepIndicatorProperties";
import { Platform } from "react-native";

export default class OrderScreen extends React.Component {
  state = {
    selectedStartAddress: null,
    selectedEndAddress: null,
    addresses: [],
    deliveryDate: new Date(),
    tel: 0
  };

  componentWillMount() {
    if (Platform.OS !== "android") {
      this.setState({ tel: DeviceInfo.getPhoneNumber() });
    }
  }

  onStartAddressValueChange(value) {
    this.setState({
      selectedStartAddress: value
    });
  }

  onEndAddressValueChange(value) {
    this.setState({
      selectedEndAddress: value
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content style={commonStyles.stepIndicatorContent} padder>
          <StepIndicator customStyles={stepIndicatorStyles} currentPosition={0} labels={stepIndicatorLabels} stepCount={4} direction="horizontal" />
          <Form>
            <Item>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" style={{ color: mclColors.green }} />}
                selectedValue={this.state.selectedStartAddress}
                onValueChange={this.onStartAddressValueChange.bind(this)}
              >
                <Picker.Item label="Adresse d'enlèvement" value={-1} />
                <Picker.Item label="Adresse 1" value="key0" />
                <Picker.Item label="Adresse 2" value="key1" />
                <Picker.Item label="Adresse 3" value="key2" />
                <Picker.Item label="Adresse 4" value="key3" />
                <Picker.Item label="Adresse 5" value="key4" />
                {/* {this.props.addresses.map((item, index) => {
                  return <Picker.Item key={index} label={item} value={item} />;
                })} */}
              </Picker>
              <Button transparent success onPress={() => this.props.navigation.navigate("OrderAddressMap")}>
                <Icon active ios="ios-pin" android="md-pin" style={commonStyles.mclIcon} />
              </Button>
            </Item>
            <Item>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                placeholderIconColor={mclColors.green}
                selectedValue={this.state.selectedEndAddress}
                onValueChange={this.onEndAddressValueChange.bind(this)}
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
              <Button transparent success onPress={() => this.props.navigation.navigate("OrderAddressMap")}>
                <Icon active ios="ios-pin" android="md-pin" style={commonStyles.mclIcon} />
              </Button>
            </Item>
            <Item>
              <Icon ios="ios-phone-portrait" android="md-phone-portrait" style={[{ fontSize: 30, marginVertical: 10, marginLeft:5 }, mclColors.green]} />
              <TextInput keyboardType="number-pad" placeholder="Saisir le numéro de téléphone" />
            </Item>

            <Item last>
              <DatePicker
                style={{ width: 200 }}
                date={this.state.deliveryDate}
                mode="datetime"
                placeholder="Date d'enlèvement souhaitée"
                format="DD/MM/YYYY HH:mm"
                is24Hour={true}
                minDate="2019-01-01"
                maxDate="2030-12-01"
                confirmBtnText="OK"
                cancelBtnText="Annuler"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36,
                    borderWidth:0
                  }
                }}
                onDateChange={date => {
                  this.setState({ deliveryDate: date });
                }}
              />
            </Item>
            </Form>
              <Body style={commonStyles.btn}>
                <Button success onPress={() => this.props.navigation.navigate("OrderSummary")}>
                  <Text>VOIR LE TARIF</Text>
                </Button>
              </Body>
        </Content>
      </Container>
    );
  }
}
