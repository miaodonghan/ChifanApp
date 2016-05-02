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

import config from '../../src/config';
import MerchantDetailView from './MerchantDetailView';
import { MKSpinner } from 'react-native-material-kit';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
});


var API_URL = config.API_HOST + '/api/v2/merchant';
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
      status: 'Fetching merchants ...'
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    console.log(REQUEST_URL);
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        if(responseData.total === 0) {
          this.setState({
            status: 'No Merchant returned.'
          });
          return;
        }
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.merchants),
          loaded: true,
        });
       // console.log(responseData.merchants);
      })
      .catch((error) => {
        this.setState({
          status: error
        });
        console.log(error);
      });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this) }
        style={styles.listView}
        />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.spinContainer}>
        <View>
          <MKSpinner />
        </View>
        <View>
          <Text>{"\n"}{this.state.status}</Text>
        </View>
      </View>
    );
  }

  pressRow(merchant) {
    this.props.navigator.push({
      name: 'MerchantDetail',
      passProps: { merchant: merchant },
    });
  }

  renderRow(merchant) {
    return (
      <TouchableHighlight onPress={() => this.pressRow(merchant) }>
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