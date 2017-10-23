import React from 'react';
import { Text, View } from 'react-native';
import getDeckData from './utils/helpers/getDeckData'
// import { DeckList }  from './components/DeckList.js';

export default class App extends React.Component {

 
  render() {

    const allDecks = getDeckData();
    
    
    return (
      <View>
        <Text> Deck:</Text>
        {Object.keys(allDecks).map(deck=><Text key={deck}>{allDecks[deck].title}&nbsp;&nbsp;{allDecks[deck].questions.length}</Text>)}

      </View>

      
    );
  }
}










// {

      //   Object.keys(allDecks).map(deck=> <Text key={deck}>{allDecks[deck].title}</Text>)
      // }