"use strict";

import React, {
  Component
} from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  BackAndroid,
} from "react-native";


class UserProfileView extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    BackAndroid.addEventListener('hardwareBackPress', () => {
      this.props.navigator.pop();
      return true;
    });
  }

  render() {
    return (
      <View >
        <Text>
          UserProfile View
        </Text>
      </View>
    );
  }
};

module.exports = UserProfileView;
