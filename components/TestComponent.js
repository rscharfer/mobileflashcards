import React from 'react';
import {Text, View} from 'react-native'


export default class TestComponent extends React.Component {

 
 

  render() {


  	console.log('props',this.props)

    return <View><Text>Hello</Text></View>
  }
}