import React from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import getDeckData from '../utils/helpers/getDeckData'
import DeckTitleAndQuestionTotal from './DeckTitleAndQuestionTotal'
import CreateNewDeckButton from './CreateNewDeckButton'





export default function DeckOverview (props){


	const allDecks = getDeckData();
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
			 <CreateNewDeckButton/>
		</View>

	)
		
}
