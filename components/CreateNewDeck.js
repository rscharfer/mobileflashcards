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
			<View>
				<Text>TCN Button</Text>
			</View>

			</TouchableNativeFeedback>
		</View>


		)
}