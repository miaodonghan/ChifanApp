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
    var base64Icon = 'http://www.getmdl.io/assets/demos/welcome_card.jpg';
    var action = (<Text> My action</Text>);
    var menu = (
       <MKIconToggle
        checked={true}
        onCheckedChange={this._onIconChecked}
        onPress={this._onIconClicked}
        >
        <Text pointerEvents="none"
              style={styles.toggleTextOff}>Off</Text>
        <Text state_checked={true}
              pointerEvents="none"
              style={[styles.toggleText, styles.toggleTextOn]}>On</Text>
      </MKIconToggle>
    );

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
              {this.props.merchant.address1} {this.props.merchant.address2}
              {this.props.merchant.city}, {this.props.merchant.state} {this.props.merchant.zipcode}

            </Text>
          </Card.Media>
          <Card.Body>
            <Text>{this.props.merchant.description}</Text>
          </Card.Body>
          <Card.Actions position="right">
            <Button text="MERCHANT WEBSITE" onPress={() => IntentAndroid.openURL('https://github.com/react-native-material-design/react-native-material-design') } />
          </Card.Actions>
        </Card>

        <View style={styles.container}>
        {/* Here the magic happens*/}
          <View style={theme.cardStyle}>
            <Image source={{uri: this.props.merchant.img_url}} style={theme.cardImageStyle}/>
            <Text style={theme.cardTitleStyle}>Welcome</Text>
            <View  // TextView padding not handled well on Android https://github.com/facebook/react-native/issues/3233
              style={{
                padding : 15,
              }}
              >
              <Text style={[theme.cardContentStyle, {padding:0}]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </Text>
            </View>
            <View style={theme.cardMenuStyle}>{menu}</View>
            <View style={theme.cardActionStyle}>

              <Text>My Action</Text>
            </View>
          </View>
        </View>
      </ScrollView>

    );
  }
};

module.exports = MerchantDetailView;
