import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getAllDecks from './helpers/getAllDecks.js'
// import { DeckList }  from './components/DeckList.js';

export default class App extends React.Component {

 
  render() {
    return (
      <View style={styles.container}>
      {

        Object.keys(getAllDecks()).map(deck=> <Text>{deck.title}</Text>)
      }

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
