"use strict";


import React, {
  Component
} from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  AsyncStorage,
  ToastAndroid
} from 'react-native';

import { MKColor, MKButton } from 'react-native-material-kit';

import config from '../../src/config';
import MerchantListView from './MerchantListView';
import RegisterView from './RegisterView';

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

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    }
  }

  render() {
    const LogInButton = MKButton.coloredButton()
      .withBackgroundColor(MKColor.Teal)
      .withText('Log In')
      .withOnPress(this.onSubmitPressed.bind(this))
      .build();

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Log In
        </Text>
        <View>
          <TextInput
            keyboardType='email-address'
            placeholder="Email"
            onChange={(event) => this.setState({ email: event.nativeEvent.text }) }
            value={this.state.email} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChange={(event) => this.setState({ password: event.nativeEvent.text }) }
            value={this.state.password} />
          <Text></Text>
          <LogInButton/>
        </View>
      </View>
    );
  }

  onSubmitPressed() {      
    var LOGIN_ENDPOINT = config.API_HOST + '/api/v1/auth/login';
    fetch(LOGIN_ENDPOINT, {
      method: 'post',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(function(response) {
        if (response.status == 403) {
          ToastAndroid.show('Authentication failed. Incorrect email or password.', ToastAndroid.SHORT);
          return;
        } else if (response.status != 200) {
          ToastAndroid.show('Error code ' + response.status, ToastAndroid.SHORT);
          return;
        }

        response.json().then(function(jsonResponse) {
          AsyncStorage.setItem('token', String(jsonResponse.token));
          AsyncStorage.setItem('expires', String(jsonResponse.expires));
          AsyncStorage.setItem('authenticated', 'true');
        });
        // redirect to merchant list page after successfully logged in.
        this.props.navigator.push({
          name: 'MerchantList',
          passProps: { email: this.state.email, password: this.state.password },
        });
      })
      .catch(function(err) {
        ToastAndroid.show('Error code ' + response.status, ToastAndroid.SHORT);
      });
  }

};

module.exports = LoginView;