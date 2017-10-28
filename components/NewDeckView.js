import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback, TextInput } from 'react-native'
import { saveDeckTitle } from  '../utils/api.js'




export default class CreateNewDeck extends Component {


	constructor(props){

		super(props);

		this.state={
			deckName:'Flowers of South Africa',

		}
	}

	handlePress(){

		const deckname = this.state.deckName;
		saveDeckTitle(deckname)
		// update database
		//  reroute

	}

	render() {

		return (
		<View>
			<Text>Create a New Deck</Text>
			<Text>Name of Deck: {this.state.deckName}</Text>

			<TextInput
				style={{height:40, borderColor:'gray', borderWidth:"1"}}
				onChangeText={(deckName) => this.setState({deckName})}
				value={this.state.deckName}
			/>

			<TouchableNativeFeedback
				background={TouchableNativeFeedback.SelectableBackground()}
				onpress={handlePress}
			>
				<View style={{width:150,height:100,backgroundColor:'red'}}>
					<Text style={{margin:30}}>Create Deck</Text>
				</View>
			</TouchableNativeFeedback>
		</View>


		)
	}
}