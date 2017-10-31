import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'
import { saveDeckTitle } from  '../utils/api.js'









export default class NewDeckView extends Component {


	constructor(props){

		super(props);

		this.state={
			deckName:'',

		}

		this.handlePress = this.handlePress.bind(this)
	}

	handlePress(){

		const deckname = this.state.deckName;
		saveDeckTitle(deckname)
		this.setState({
			deckName:''
		})
		

	}

	render() {

		console.log('here is the state of new deck view on render',this.state)
		return (
		<View style={styles.container}>

			<Text style={styles.header}>What is the title of your new deck?</Text>

			<TextInput
				style={styles.textInputBox}
				onChangeText={(deckName) => this.setState({deckName})}
				value={this.state.deckName}
			/>
			<View>
				<Button
					title="Create Deck"
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
		flex:1
	},

	textInputBox:{
		borderWidth:1,
		borderColor:'gray',
		height:40,
		width:200,
		marginBottom:20
		
	},
	header:{

		fontSize:40,
		textAlign:'center'
	},


})