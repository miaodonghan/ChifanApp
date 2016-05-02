"use strict";

import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  BackAndroid
} from 'react-native';

import { MKColor, MKButton } from 'react-native-material-kit';

import MerchantListView from './MerchantListView';

var styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "stretch"
  },
  title: {
    fontSize: 18,
    marginBottom: 10
  }
});

class RegisterView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    BackAndroid.addEventListener('hardwareBackPress', () => {
      this.onBackPressed();
      return true;
    });
  }

  render() {

    const RegisterButton = MKButton.coloredButton()
      .withBackgroundColor(MKColor.Teal)
      .withText('Create my account')
      .withOnPress(this.onSubmitPressed.bind(this))
      .build();

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Create an account with Golden Club
        </Text>
        <TextInput
          placeholder="Email"
          keyboardType='email-address'

          onChange={(event) => this.setState({ email: event.nativeEvent.text }) }
          value={this.state.email} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChange={(event) => this.setState({ password: event.nativeEvent.text }) }
          value={this.state.password} />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChange={(event) => this.setState({ password2: event.nativeEvent.text }) }
          value={this.state.password2} />
        <Text />
        <RegisterButton />
      </View>
    );
  }

  onSubmitPressed() {
    // this.props.navigator.push({
    //   component: MerchantListView,
    //   passProps: { email: this.state.email, password: this.state.password },
    //  });
  }
  onBackPressed() {
    this.props.navigator.pop();
  }

};


module.exports = RegisterView;