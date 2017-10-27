import { AsyncStorage } from 'react-native'



const STORAGEKEY = "STORAGEKEY";


export function addDeck({name}){


	return AsyncStorage.mergeItem(STORAGEKEY,JSON.stringify(name))
}



export function removeDeck({name}){


	return AsyncStorage.getItem(STORAGEKEY)

	.then(res=>{

		const data = JSON.parse(res);
		data.splice(data.indexOf(name),1)
	})
}