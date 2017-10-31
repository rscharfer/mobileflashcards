import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'
import { saveDeckTitle } from  '../utils/api.js'









export default class NewDeckView extends Component {


	constructor(props){

		super(props);

		this.state={
			question:'What is the meaning of life?',
			answer:'To make as much money as possible'

		}
	}

	handlePress(){

		//const deckname = this.state.deckName;
		//saveDeckTitle(deckname)
		// update database
		//  reroute

	}

	render() {

	
		return (
		<View style={styles.container}>


			<TextInput
		
				style={styles.textInputBox}
				onChangeText={(question) => this.setState({question})}
				value={this.state.question}
			/>

			<TextInput
				
				style={styles.textInputBox}
				onChangeText={(answer) => this.setState({answer})}
				value={this.state.answer}
			/>
			<View>
				<Button
					title="Add Question"
					color="blue"
					onPress={this.handlePress}
				/> 
			</View>
		</View>


		)
	}
}


const styles = StyleSheet.create({

	container:{
		justifyContent:'flex-start',
		alignItems:'center',
		flex:1,
		marginTop:30
	},

	textInputBox:{
		borderWidth:1,
		borderColor:'gray',
		height:40,
		width:200,
		marginBottom:20
		
	},



})