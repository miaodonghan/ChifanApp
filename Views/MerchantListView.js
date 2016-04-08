import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Config from '../Config/App';
import MerchantDetailView from './MerchantDetailView';

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


var API_URL = Config.API_HOST + '/api/v2/merchant';
var PARAMS = '?page_size=5&current_page=1';

var REQUEST_URL = API_URL + PARAMS;

class MerchantListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      status: 'loading merchants ...'
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
      .catch((error) => {
        this.setState({
          status: error
        });
      });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    console.log("loading");
    return (
      <View style={styles.container}>
        <Text>
          {this.state.status}
        </Text>
      </View>
    );
  }

  pressRow(merchant) {
    this.props.navigator.push({
      component: MerchantDetailView,
      passProps: { name: merchant.name, id: merchant.id },
    });
  }

  renderRow(merchant) {
    return (
      <TouchableHighlight onPress={()=> this.pressRow(merchant)}>
        <View style={styles.container}>
          <Image
            source={{ uri: merchant.img_url }}
            style={styles.thumbnail}
            />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{merchant.name}</Text>
            <Text style={styles.year}>{merchant.url}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

}


module.exports = MerchantListView;