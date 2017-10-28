import React from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import getDecks from '../utils/api.js'
import DeckListItem from './DeckListItem'
import GoToNewDeckViewButton from './GoToNewDeckViewButton'


const Stack = StackNavigator({
  DeckListView: {
    screen: DeckListView
  },
  NewDeckView: {
    screen: NewDeckView
  }
})





export default function DeckListView (props){


	const allDecks = getDecks();
	const allDecksToArray = Object.keys(allDecks).map((key)=>allDecks[key])

	


	return (
		
		<View>

			<Text>Decks</Text>
			<Text>Testes-F</Text>
				<View>
					<FlatList
						data={allDecksToArray}
						renderItem={({item})=><Text>{item.title}</Text>}
					/>
				 </View>
			 <GoToNewDeckViewButton navigation={props.navigation}/>
		</View>

	)
		
}
