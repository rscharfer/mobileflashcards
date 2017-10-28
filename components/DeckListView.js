import React from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import getDecks from '../utils/api.js'
import DeckListItem from './DeckListItem'
import NewDeckView from './DeckListItem'
import GoToNewDeckViewButton from './GoToNewDeckViewButton'
import { StackNavigator } from 'react-navigation'


// second edited out  const Stack = StackNavigator({
//   DeckListView: {
//     screen: DeckListView
//   },
//   NewDeckView: {
//     screen: NewDeckView
//   }
// })





export default function DeckListView (props){

	
	console.log('hello from the console again')
	getDecks().then((res)=>console.log(res));
	// const allDecksToArray = Object.keys(allDecks).map((key)=>allDecks[key])

	


	return (
		
		<View>

			<Text>Decks</Text>
			<Text>Testes- alert and debugger</Text>
				<View>
				{/*	<FlatList
						data={allDecksToArray}
						renderItem={({item})=><Text>{item.title}</Text>}
					/>  */}
				 </View>
			{/* first edited out <GoToNewDeckViewButton navigation={props.navigation}/> */}
		</View>

	)
		
}
