import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { getDeck } from '../utils/api' 
import CustomButton from 'react-native-button'



export default class IndividualDeckView extends Component {




	constructor(props){

		super(props)
	}


	render(){

		return (

			<View style={styles.container}>

				<View style={styles.textContainer}>
					<Text style={styles.deckTitle}>udacicards</Text>
					<Text style={styles.cardNumber}>3 cards</Text>
				</View>

				<View style={styles.buttonContainer}>
					<View style={styles.addCardButton}>
						<Button title="Add Card" ></Button>
					</View>
					<View style={styles.startQuizButton}>
					<Button title="Start Quiz" color="purple"></Button>
					</View>
				</View>

			</View>



			)
	}
}


const styles = StyleSheet.create({


	container:{

		justifyContent:'flex-end',
		alignItems:'center',

	},

	textContainer:{

		marginBottom:20,
	},

	buttonContainer:{
		marginTop:20
	},

	deckTitle:{

		fontSize:40,
		textAlign:'center',
		marginBottom:10

	},

	cardNumber:{

		fontSize:20,
		textAlign:'center',
		marginTop:10,
		color: 'gray',
	},

	addCardButton:{

		marginBottom:20

	},

	startQuizButton:{

	
	}


})