import React from 'react';
import { StyleSheet } from 'react-native';


export default class DeckTitle extends React.Component {

  constructor(props){


  }

  render() {
    return (
      <div>
        
        <h3>Title</h3>
        <span>Number of flash cards:</span><i>10</i>
      </div> 

      
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