import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';

import demo1Image from './Images/demo1.jpg'
import demo2Image from './Images/demo2.jpg'

export class DemoCompo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  
  let demoData=[{ employeeName:"vivek",image:demo1Image, department: "technology"},{ employeeName:"mahesh",image:demo2Image, department: "R&D"}, { employeeName:"piyush",image:demo1Image, department: "security"}]

  renderContent({item,index}){

    return(<View>
      <Text >{item.employeeName}</Text>
      <Image source={item.image}  style={{ height:50, width:50}}/>
      <Text>{item.department}</Text>
    </View>)

  }

  // renderContent(index, item) {
  //   return (
  //     <>
  //       <Flatlist data={demoData} renderItem={this.}>/
  //     </>
  //   );
  // }

  // //   const renderContent =(item,index)=>(
  // //         <>
  // //           <Text>{item}</Text>
  // //         </>
  // //       );

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setState(prevState => {
              return prevState.count + 1;
            });
            this.setState(prevState => {
              return prevState.count + 1;
            });
          }}>
          <Text />
        </TouchableOpacity>
        <FlatList data={demoData} renderItem={this.renderContent.bind(this)} />
      </View>
    );
  }
}

export default DemoCompo;
