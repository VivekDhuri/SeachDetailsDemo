import {Text, View} from 'react-native';
import React, {Component} from 'react';
import PersonalDetails from './PersonalDetails';
import PersonList from './PersonList';

export class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personList: [],
    };
  }

  addToPersonsList = ({name, age}) => {
    this.state.personList.push({name, age});
    this.state.personList.sort(this.compare);
    this.setState({
      personList: this.state.personList,
    });
  };

  compare = (a, b) => {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <PersonalDetails addName={this.addToPersonsList.bind(this)} />
        <PersonList personListData={this.state.personList} />
      </View>
    );
  }
}

export default MainScreen;
