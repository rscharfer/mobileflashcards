import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class DeckTitle extends React.Component {

  constructor(props){


  }

  render() {
    return (
      <View>
        
        <Text>Title</Text>
        <Text>Number of flash cards: 10</Text>
      </View> 

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});