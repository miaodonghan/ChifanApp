"use strict";

import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from "react-native";

var styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "center"
  },
  heading: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#656565"
  },
  subheading: {
    color: "#cccccc"
  }
});

class MerchantDetailView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      id: this.props.id
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Welcome {this.props.name}!
        </Text>
        <Text style={styles.subheading}>
          Merchant id is {this.props.id}
        </Text>
      </View>
    );
  }
};

module.exports = MerchantDetailView;
