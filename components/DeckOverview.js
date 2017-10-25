import React from 'react'
import { Text, View } from 'react-native'
import getDeckData from '../utils/helpers/getDeckData'
import DeckTitleAndQuestionTotal from './DeckTitleAndQuestionTotal'
import CreateNewDeckButton from './CreateNewDeckButton'




export default function DeckOverview (props){


	const allDecks = getDeckData();


	return (
		
		<View>

			<Text>Decks</Text>
				<View>
				 {
					Object.keys(allDecks).map(deck=><DeckTitleAndQuestionTotal key={deck} title={allDecks[deck].title} questionTotal={allDecks[deck].questions.length} />)

				 }
				 </View>
			 <CreateNewDeckButton/>
		</View>

	)
		
}