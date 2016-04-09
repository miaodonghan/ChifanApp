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

import { Button } from 'react-native-material-design';


var styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
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
          <Button text="Sign In" raised={true} onPress={this.onSubmitPressed.bind(this)} />
        </View>

        <Button text="Create an account" onPress={this.onRegisterPressed.bind(this)} />

      </View>
    );
  }

  onSubmitPressed() {
    this.props.navigator.push({
      component: MerchantListView,
      passProps: { username: this.state.username, password: this.state.password },
    });
  }
  onRegisterPressed() {
    this.props.navigator.push({
      component: RegisterView,
    });
  }
};


module.exports = LoginView;