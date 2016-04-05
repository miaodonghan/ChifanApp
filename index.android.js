/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */


import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://10.74.90.221:1337/api/v1/merchant';
var PAGE_SIZE = 25;
var PARAMS = '?page_size=5&current_page=1';

var REQUEST_URL = API_URL + PARAMS;

class ChifanApp extends Component {

   constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.merchants),
          loaded: true,
        });
      })
      .done();
  }

  render () {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMerchant}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading merchants...
        </Text>
      </View>
    );
  }
  renderMerchant(merchant) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: merchant.img_url}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{merchant.name}</Text>
          <Text style={styles.year}>{merchant.url}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 120,
    height: 90,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('chifan', () => ChifanApp);
