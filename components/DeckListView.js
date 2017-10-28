import React from 'react'
import { Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import NewDeckView from './NewDeckView'







export default function DeckListView ({ navigation }) {

	



		
		return (
		
		<View>

			<Text>Deck</Text>
			<Text>Testes- alert </Text>
		
				<View>
		
				 </View>
			<Button title="New Deck" onpress={()=>navigation.navigate('NewDeckView',{name:'New Deck'})}/>
		</View>

	)



	
		
}


const Stack = StackNavigator({

		Home : {
			screen: DeckListView
		},

		NewDeckView: {
			screen:NewDeckView
		}

		
	})

