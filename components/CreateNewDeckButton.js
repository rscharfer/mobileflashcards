import React, { Component } from 'react'
import {Text, View, TouchableNativeFeedback } from 'react-native'


export default function CreateNewDeckButton () {


	handlePress(){


		alert('pressed!')
		// route to CreateNewDeckScreen
	}

	return (


		<TouchableNativeFeedback 
		background={TouchableNativeFeedback.SelectableBackground()}
		onPress={handlePress}
		style={{width:100, height:50, backgroundColor:'red'}}>
			<View>
				<Text style={{margin:30}}>Create New Deck</Text>
			</View>
		</TouchableNativeFeedback>

	)
}