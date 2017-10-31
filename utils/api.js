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

	.then(result=>{
	
		return JSON.parse(result)
	})
	.then(parsedResult=>{

		return parsedResult[id]
	})
}


// returns a promis


export function addCardToDeck({deck,card}){



	return AsyncStorage.getItem(DECKS)

	.then((result)=>JSON.parse(result))
	.then((parsedResult)=>parsedResult[deck])
	.then((deck)=>{
		deck.questions.push(card)
		return deck;
	})
	.then((updatedDeck)=>{
		AsyncStorage.mergeItem(DECKS,JSON.stringify({[deck]:updatedDeck}))
	})
}




