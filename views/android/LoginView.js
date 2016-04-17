"use strict";

import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import MerchantListView from './MerchantListView';
import RegisterView from './RegisterView';
import { MKColor, MKButton } from 'react-native-material-kit';

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
      username: "",
      password: ""
    };
  }

  render() {
    const SignInButton = MKButton.coloredButton()
      .withBackgroundColor(MKColor.Teal)
      .withText('Sign In')
      .withOnPress(this.onSubmitPressed.bind(this))
      .build();

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Sign In
        </Text>
        <View>
          <TextInput
            placeholder="Username"
            onChange={(event) => this.setState({ username: event.nativeEvent.text }) }
            value={this.state.username} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChange={(event) => this.setState({ password: event.nativeEvent.text }) }
            value={this.state.password} />
          <Text></Text>
          <SignInButton/>
        </View>
      </View>
    );
  }

  onSubmitPressed() {
    this.props.navigator.push({
      name: 'merchant_list',
      passProps: { username: this.state.username, password: this.state.password },
    });
  }

};


module.exports = LoginView;