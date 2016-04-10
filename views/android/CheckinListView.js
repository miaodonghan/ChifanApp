"use strict";

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  BackAndroid,
} from "react-native";


class CheckinListView extends Component {

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
          Checkin List view
        </Text>
      </View>
    );
  }
};

module.exports = CheckinListView;
