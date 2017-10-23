import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getDeckData from './utils/helpers/getDeckData'
// import { DeckList }  from './components/DeckList.js';

export default class App extends React.Component {

 
  render() {

    const reactDeck = getDeckData('React');
    const str = "yo"
    debugger;
    return (
      <View style={styles.container}>
        
        <Text>{reactDeck.title}</Text>

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








// {

      //   Object.keys(allDecks).map(deck=> <Text key={deck}>{allDecks[deck].title}</Text>)
      // }