import React, { Component } from 'react'
import {Text, View, TouchableNativeFeedback } from 'react-native'





export default function GoToNewDeckViewButton ({ navigation }) {


	function handlePress(){

		
		navigation.navigate('NewDeckView')
	}

	return (


		 <TouchableNativeFeedback
        onPress={handlePress}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
        <Text style={{margin: 30}}>Create Deck</Text>
      </View>
    	</TouchableNativeFeedback>

		

		

	)
}