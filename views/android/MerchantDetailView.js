"use strict";

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  IntentAndroid,
  BackAndroid,
  ScrollView,
} from "react-native";

import { Button, Card, COLOR, TYPO} from 'react-native-material-design';


import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme,
} from 'react-native-material-kit';
const theme = getTheme();
const styles = require('./styles');

class MerchantDetailView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      id: this.props.id
    };

    BackAndroid.addEventListener('hardwareBackPress', () => {
      this.props.navigator.pop();
      return true;
    });
  }

  render() {


    return (
      <ScrollView style={styles.scrollView}>
        <Card>
          <Card.Media
            image={<Image source={{uri: this.props.merchant.img_url}} />}
            overlay>
            <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>
              {this.props.merchant.name}
            </Text>
            <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>
              {this.props.merchant.address1} {this.props.merchant.address2} {this.props.merchant.city}, {this.props.merchant.state} {this.props.merchant.zipcode}
            </Text>
          </Card.Media>
          <Card.Body>
            <Text>{this.props.merchant.description}</Text>
          </Card.Body>
          <Card.Actions position="right">
            <Button text="MERCHANT WEBSITE" onPress={() => IntentAndroid.openURL('https://github.com/react-native-material-design/react-native-material-design') } />
          </Card.Actions>
        </Card>
      </ScrollView>

    );
  }
};

module.exports = MerchantDetailView;
