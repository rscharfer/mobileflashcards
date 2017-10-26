// import React from 'react'
// import { Text, View, ScrollView, FlatList } from 'react-native'
// import getDeckData from '../utils/helpers/getDeckData'
// import DeckTitleAndQuestionTotal from './DeckTitleAndQuestionTotal'
// import CreateNewDeckButton from './CreateNewDeckButton'




// export default function DeckOverview (props){


// 	const allDecks = getDeckData();

// 	const renderItem = ({item}) => {

// 		// return <DeckTitleAndQuestionTotal {...item} />

// 		return <DeckTitleAndQuestionTotal key={item.title} title={item.title} questionTotal={item.questions.length} />

// 	}


// 	return (
		
// 		<View>

// 			<Text>Decks</Text>
// 				<View>
// 				<FlatList
// 					data={allDecks}
// 					renderItem={renderItem}
// 				/>
		
// 				 </View>
// 			 <CreateNewDeckButton/>
// 		</View>

// 	)
		
// }

import React from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import getDeckData from '../utils/helpers/getDeckData'
import DeckTitleAndQuestionTotal from './DeckTitleAndQuestionTotal'





export default function DeckOverview (props){


	const allDecks = getDeckData();
	const allDecksToArray = Object.keys(allDecks).map((key)=>allDecks[key])

	const renderItem = ({item}) => {

		return <View>Here is a Deck! </View>

	

	}


	return (
		
		<View>

			<Text>Decks</Text>
			<Text>Test A Fourth Time</Text>
				<View>
				<FlatList
					data={allDecksToArray}
					renderItem={({item})=><Text>{item.title}</Text>}
				/>
		
				 </View>
			 
		</View>

	)
		
}
