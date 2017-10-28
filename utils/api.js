import { AsyncStorage } from 'react-native'



const DECKS = "DECKS";



// returns a promise

export function saveDeckTitle(title){


	AsyncStorage.mergeItem( DECKS , JSON.stringify({
		[title]:{
			title,
			questions:[]
		}
		})
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




