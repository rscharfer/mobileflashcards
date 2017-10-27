import { AsyncStorage } from 'react-native'



const DECKS = "DECKS";


export function addDeck(name){

	return AsyncStorage.getItem(DECKS)
	.then(res=>JSON.parse(res))
	.then(deckArray=>{
		deckArray.push(name)
		return deckArray;
	})
	.then(newDeck=>AsyncStorage.setItem(DECKS,JSON.parse(newDeck))
	)
	

}



// export function removeDeck({name}){


// 	return AsyncStorage.getItem(STORAGEKEY)

// 	.then(res=>{

// 		const data = JSON.parse(res);
// 		data.splice(data.indexOf(name),1)
// 	})
// }