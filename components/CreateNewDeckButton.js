import React, { Component } from 'react'
import {Text, View, Button } from 'react-native'


export default function CreateNewDeckButton () {


	function handlePress(){


		alert('pressed!')
		// route to CreateNewDeckScreen
	}

	return (


		<Button 
		title="Create Deck"
		onPress={handlePress}
		color="blue"
		/>

		

		

	)
}