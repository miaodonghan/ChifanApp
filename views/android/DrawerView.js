
import React, {
  Component
} from "react";

import {PropTypes, View, Text, Image } from 'react-native';

import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';

export default class DrawerView extends Component {

  changeScene(name) {
    console.log(this.refs);
    this.refs["navigator"].push({name: name})
  };

  render() {
    const { route } = this.state;

    return (
      <Drawer theme='light'>
        <Drawer.Header image={<Image source={require('../../img/nav.jpg') } />}>
          <View style={styles.header}>
            <Avatar size={80} image={<Image source={{ uri: "http://facebook.github.io/react-native/img/opengraph.png?2" }}/>} />
            <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>Golden Club Member</Text>
          </View>
        </Drawer.Header>

        <Drawer.Section
          items={[{
            icon: 'home',
            value: 'Welcome',
            active: !route || route === 'welcome',
            onPress: this.changeScene.bind(this,'login'),
          }]}
          />

        <Drawer.Section
          title="Components"
          items={[{
            icon: 'face',
            value: 'Avatars',
            active: route === 'avatars',
            onPress: () => this.changeScene('avatars'),
          }, {
              icon: 'label',
              value: 'Buttons',
              active: route === 'buttons',
              onPress: () => this.changeScene('buttons'),
            }, {
              icon: 'check-box',
              value: 'Checkboxes',
              active: route === 'checkboxes',
              onPress: () => this.changeScene('checkboxes'),
            }]}
          />
        <Divider style={{ marginTop: 8 }} />
        <Drawer.Section
          title="Config"
          items={[{
            icon: 'invert-colors',
            value: 'Change Theme',
            active: route === 'themes',
            onPress: () => this.changeScene('themes'),
            onLongPress: () => this.changeScene('themes')
          }]}
          />

      </Drawer>
    );
  }
}

const styles = {
  header: {
    paddingTop: 16
  },
  text: {
    marginTop: 20
  }
};

module.exports = DrawerView;