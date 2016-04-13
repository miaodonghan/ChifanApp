'use strict';

import React, {
  AppRegistry,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Component,
  BackAndroid,
  DrawerLayoutAndroid
} from 'react-native';

import LoginView from './views/android/LoginView';
import MerchantListView from './views/android/MerchantListView';
import DrawerView from './views/android/DrawerView';

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
    return <route.component navigator={navigator} {...route.passProps} />;
  }

  _configureScene(route) {
    return CustomSceneConfig;
  }

  render() {
    var navigationView = (
      <DrawerView />
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        >
        <Navigator
          initialRoute={{ component: MerchantListView, }}
          renderScene={this._renderScene}
          configureScene={this._configureScene}
          />
      </DrawerLayoutAndroid>
    );

  }
};

AppRegistry.registerComponent('chifan', () => ChifanApp);
