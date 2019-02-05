/*Standard modules */
import React from "react";

import { Container, Card,CardItem, Content, Left, Right, Title, Separator, List, Form, Item, ListItem, Icon, Input, Picker, Body, Text, Label, Button } from "native-base";
import StepIndicator from "react-native-step-indicator";

/*Custom import*/
import { stepIndicatorLabels, stepIndicatorStyles } from "../screens-util/stepIndicatorProperties";

/*Styles*/
import { styles } from "./styles";
import { commonStyles } from "../screens-util/commonStyles";

export default class OrderSummaryScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content style={commonStyles.stepIndicatorContent} padder>
          <StepIndicator customStyles={stepIndicatorStyles} currentPosition={0} labels={stepIndicatorLabels} stepCount={4} direction="horizontal" />
          
          <Card style={[commonStyles.cardStyle,{marginTop:10}]} >
                  <CardItem header first >
                    <Body>
                      <Text style={{fontWeight:"bold"}}>Récapitulatif de la commande</Text>
                    </Body>
                  </CardItem>
                  <CardItem cardBody>
                    <Left>
                      <Text note>De:</Text>
                      <Text>ENTA</Text>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Left>
                      <Text note>A:</Text>
                      <Text>Madina</Text>
                    </Left>
                  </CardItem>
                 
                  <CardItem cardBody>
                    <Left>
                      <Text note>Distance:</Text>
                      <Text>20</Text>
                      <Text note>Km</Text>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Left>
                      <Text note>Livraison pour le:</Text>
                      <Text> 15/02/2019 11:30</Text>
                    </Left>
                  </CardItem>

                  <CardItem cardBody>
                    <Left>
                      <Text note>Tarif:</Text>
                      <Text>20 000</Text>
                      <Text note>FG</Text>
                    </Left>
                  </CardItem>
                  <CardItem footer last>
                    <Left />
                    <Body style={commonStyles.btn}>
                      <Button success onPress={() => this.props.navigation.navigate("Account")}>
                        <Text>VALIDER</Text>
                      </Button>
                    </Body>
                    <Right/>
                  </CardItem>
                </Card>         
        </Content>
      </Container>
    );
  }
}
