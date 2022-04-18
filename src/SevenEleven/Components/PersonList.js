import {
  View,
  Text,
  Dimensions,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {Component} from 'react';

export class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      dataList: [],
    };
  }

  filterData = list => {
    // return list.filter(data => data.name === this.state.searchValue);
    return list.filter(data => data.name.includes(this.state.searchValue));
  };

  static getDerivedStateFromProps(props, state) {
    if (
      props.personListData.length !== state.dataList &&
      state.searchValue === ''
    ) {
      return {
        dataList: props.personListData,
      };
    }
    return null;
  }

  onSearchText = text => {
    this.setState({
      searchValue: text,
    });
  };

  renderContent = ({item}) => {
    return (
      <View
        style={{width: Dimensions.get('window').width, flexDirection: 'row'}}>
        <Text style={styles.cellItemStyle}>{item.name}</Text>
        <Text style={styles.cellItemStyle}>{item.age}</Text>
      </View>
    );
  };

  filterList = () => {
    this.setState({
      dataList: this.filterData(this.props.personListData),
    });
  };

  render() {
    return (
      <View
        style={{
          width: Dimensions.get('screen').width,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            style={{
              height: 40,
              width: Dimensions.get('screen').width - 100,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 4,
            }}
            value={this.state.searchValue}
            onChangeText={this.onSearchText.bind(this)}
          />
          <TouchableOpacity onPress={this.filterList.bind(this)}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          height={500} //TODO:this needed to changed:flexbox
          data={this.state.dataList}
          renderItem={this.renderContent.bind(this)}
        />
      </View>
    );
  }
}

export default PersonList;

const styles = StyleSheet.create({
  cellItemStyle: {
    flex: 0.5,
    color: 'white',
    margin: 5,
    height: 40,
    backgroundColor: '#332FD0',
    borderRadius: 10,
  },
});
