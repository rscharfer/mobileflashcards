import { AsyncStorage } from 'react-native'



const DECKS = "DECKS";



// returns a promise

export function saveDeckTitle(title){

	// assuming you do not have to first set an inital value

	return AsyncStorage.mergeItem(DECKS,JSON.stringify({title}),

			()=>{AsyncStorage.getItem(DECKS),

					(result)=>{alert(JSON.stringify(result))}

			}

		)

}



// returns a promise

export function getDecks(){


	return AsyncStorage.getItem(DECKS)
}




// returns a promise

export function getDeck(id){


	return AsyncStorage.getItem(DECKS)

	.then((result)=>JSON.parse(result))
	.then((parsedResult)=>parsedResult[id])
}


// returns a promis


export function addCardToDeck({title,card}){



	return AsyncStorage.getItem(DECKS)

	.then((result)=>JSON.parse(result))
	.then((parsedResult)=>parsedResult[id])
	.then((deck)=>{
		deck.questions.push(card)
		return deck;
	})
	.then((updatedDeck)=>{
		AsyncStorage.mergeItem(DECKS,JSON.stringify({[title]:updatedDeck}))
	})
}




