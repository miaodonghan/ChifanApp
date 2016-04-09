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

var styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "stretch"
  },
  title: {
    fontSize: 18,
    marginBottom: 10
  },
  formInput: {
    height: 36,
    padding: 10,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 5,
    flex: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 8,
    color: "#555555"
  },
  button: {
    height: 40,
    flex: 1,
    backgroundColor: "#555555",
    borderColor: "#555555",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    alignSelf: "center"
  },
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
            style={styles.formInput}
            value={this.state.username} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChange={(event) => this.setState({ password: event.nativeEvent.text }) }
            style={styles.formInput}
            value={this.state.password} />
          <TouchableHighlight onPress={(this.onSubmitPressed.bind(this)) } style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onRegisterPressed.bind(this)}>
          <View>
            <Text style={styles.buttonText}>Create an account</Text>
          </View>
        </TouchableHighlight>
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