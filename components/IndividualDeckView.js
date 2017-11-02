import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { getDeck } from '../utils/api' 
import CustomButton from 'react-native-button'



export default class IndividualDeckView extends Component {




	constructor(props){

		super(props)

		this.state = {
			// set initial state
			title: this.props.navigation.state.params.title,
			noOfCards : this.props.navigation.state.params.noOfCards
		}

		this.handleAddCardClick = this.handleAddCardClick.bind(this)
		this.handleStartQuizClick = this.handleStartQuizClick.bind(this)
		this.updateDeckViewState = this.updateDeckViewState.bind(this)
	}


	handleAddCardClick(){

		const navigation = this.props.navigation;
		navigation.navigate('NewQuestionView',{deck:this.state.title, updateDeckViewState:this.updateDeckViewState, refresh:this.props.navigation.state.params.refresh})

	}


	handleStartQuizClick(){

		const navigation = this.props.navigation;
		navigation.navigate('QuizView')
	}


	updateDeckViewState(){

		getDeck(this.state.title).then(result=>{

			this.setState({
				noOfCards:result.questions.length
			})
		})

	}




	render(){
	
		return (

			<View style={styles.container}>

				<View style={styles.textContainer}>
					<Text style={styles.deckTitle}>{this.state.title}</Text>
					<Text style={styles.cardNumber}>{this.state.noOfCards} cards</Text>
				</View>

				<View style={styles.buttonContainer}>
					<View style={styles.addCardButton}>
						<Button title="Add Card" onPress={this.handleAddCardClick} ></Button>
					</View>
					<View style={styles.startQuizButton}>
					<Button title="Start Quiz" color="purple" onPress={this.handleStartQuizClick}></Button>
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