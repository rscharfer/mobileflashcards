import { AsyncStorage } from 'react-native'

const DECKS = "DECKS";

export function saveDeckTitle(title){

	return AsyncStorage.mergeItem( DECKS , JSON.stringify({
		[title]:{
			title,
			questions:[]
		}	
	}))
}


export function getDecks(){
	return AsyncStorage.getItem(DECKS)
}


export function getDeck(id){

	return AsyncStorage.getItem(DECKS)

	.then(result=>{
	
		return JSON.parse(result)
	})
	.then(parsedResult=>{

		return parsedResult[id]
	})
}


export function addCardToDeck({question,answer,deck}){

	return AsyncStorage.getItem(DECKS)

	.then((result)=>JSON.parse(result))
	.then((parsedResult)=>{
		return parsedResult[deck]
	})
	.then((deck)=>{
		deck.questions.push({question,answer})
		return deck;
	})

	.then((updatedDeck)=>{
		AsyncStorage.mergeItem(DECKS,JSON.stringify({[deck]:updatedDeck}))
	})
}




