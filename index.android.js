'use strict';

import React, {
  AppRegistry,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Component,
  BackAndroid,
  DrawerLayoutAndroid,
  PropTypes,
  Image
} from 'react-native';

import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';

import LoginView from './views/android/LoginView';
import RegisterView from './views/android/RegisterView';
import MerchantListView from './views/android/MerchantListView';
import MerchantDetailView from './views/android/MerchantDetailView';

var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;

var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
  // Make it snap back really quickly after canceling pop
  snapVelocity: 8,
  // Make it so we can drag anywhere on the screen
  edgeHitWidth: SCREEN_WIDTH,
});

var CustomSceneConfig = Object.assign({}, BaseConfig, {
  // A very tighly wound spring will make this transition fast
  springTension: 100,
  springFriction: 1,
  // Use our custom gesture defined above
  gestures: {
    pop: CustomLeftToRightGesture,
  }
});

class ChifanApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawer: null,
      navigator: null
    };
  }

  _renderScene(route, navigator) {
    switch (route.name) {
      case 'login':
        return <LoginView navigator={navigator} refs={this.refs} {...route.passProps} />;
      case 'MerchantList':
        return <MerchantListView navigator={navigator} refs={this.refs} {...route.passProps} />;
      case 'register':
        return <RegisterView navigator={navigator} refs={this.refs} {...route.passProps} />;
      case 'MerchantDetail':
        return <MerchantDetailView navigator={navigator} refs={this.refs} {...route.passProps} />;
    }
  }

  _configureScene(route) {
    return CustomSceneConfig;
  }

  navigateTo(name) {
    this.refs["navigator"].resetTo({ name: name });
    this.refs['drawer'].closeDrawer();
  };

  render() {
    const { route } = this.state;

    var navigationView = (
      <Drawer theme='light'>
        <Drawer.Header image={<Image source={require('./img/nav.jpg') } />}>
          <View style={styles.header}>
            <Avatar size={80} image={<Image source={{ uri: "http://facebook.github.io/react-native/img/opengraph.png?2" }}/>} />
            <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>Golden Club Member</Text>
          </View>
        </Drawer.Header>

        <Drawer.Section
          title="Account"
          items={[{
            icon: 'fingerprint',
            value: 'Login',
            onPress: this.navigateTo.bind(this, 'login'),
          },
            {
              icon: 'face',
              value: 'Create an account',
              onPress: this.navigateTo.bind(this, 'register'),
            }
          ]}
          />

        <Drawer.Section
          title="Components"
          items={[{
            icon: 'list',
            value: 'Merchants',
            onPress: this.navigateTo.bind(this, 'MerchantList'),
          }
          ]}
          />
      </Drawer>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        ref='drawer'
        >
        <Navigator
          initialRoute={{ name: 'MerchantList' }}
          renderScene={this._renderScene}
          configureScene={this._configureScene}
          ref='navigator'
          />
      </DrawerLayoutAndroid>
    );

  }
};

const styles = {
  header: {
    paddingTop: 16
  },
  text: {
    marginTop: 20
  }
};

AppRegistry.registerComponent('chifan', () => ChifanApp);
