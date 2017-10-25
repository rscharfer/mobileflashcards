import React from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'




export default function CreateNewDeck (props){

	function handlePress(){


		alert('You pressed a touchable native feedback component')
	}

	return (
		<View>
			<Text>Create a New Deck</Text>
			<Text>Name of Deck</Text>
			<Text>Input Box</Text>
			<TouchableNativeFeedback
				background={TouchableNativeFeedback.SelectableBackground()}
				onpress={handlePress}

			>

			<View style={{width:150,height:100,backgroundColor:'red'}}>
				<Text>Create Deck</Text>
			</View>

			</TouchableNativeFeedback>
		</View>


		)
}