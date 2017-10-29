import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { getDeck } from '../utils/api' 
import CustomButton from 'react-native-button'



export default class QuizView extends Component {



	// which deck will be on the props
	constructor(props){

		super(props)
		this.state = {

			questions:[   
				{
	        		question: 'What is React?',
	        		answer: 'A library for managing user interfaces'
	      		},

	      		{
			        question: 'Where do you make Ajax requests in React?',
			        answer: 'The componentDidMount lifecycle event'
	      		}
      		],

			questionNumber:0,
			questionIsShown:false,
			correctAnswers:0
		}

	
	}







	handleQuestionAnswerFlip(){

		this.setState((prevState)=>{

			return {

				questionIsShown:!prevState.questionIsShown
			}
		})
	}

	handleCorrectPress(){

		this.setState((prevState)=>{

			return{
				questionNumber:++prevState.questionNumber,
				correctAnswers:++prevState.correctAnswers
			}
		})
	}

	handleIncorrectPress(){

		this.setState((prevState)=>{

			return{
				questionNumber:++prevState.questionNumber
			}
		})
	}


	render(){

		const state = this.state;
		const questionAndAnswer = state.questions[state.questionNumber];
		const question = questionAndAnswer.question;
		const answer = questionAndAnswer.answer;
		

		return (

			<View>
				<View><Text style={styles.questionTracker}>{state.questionNumber + 1 }/{state.questions.length}</Text></View>

				<View styles={styles.container}>

					<Text style={styles.question}>
					{this.state.questionIsShown? question : answer}
					</Text>
				
					<CustomButton onPress={()=>this.handleQuestionAnswerFlip()} style={styles.flipper}>
					{ this.state.questionIsShown? "See Answer" : "See Question" }
					</CustomButton>
				
					 <CustomButton onPress={()=>this.handleCorrectPress()}style={styles.correctButton}>Correct</CustomButton>
					 <CustomButton onPress={()=>this.handleIncorrectPress()}style={styles.incorrectButton}>Incorrect</CustomButton>

					



				</View>
			</View>
		)

	}

}

const styles = StyleSheet.create({


	container:{

		justifyContent:'flex-start',
		alignItems:'center'
	},

	flipper:{

		textAlign:"center",
		color:"blue",
		marginBottom:20,
		fontSize:10
	},

	question:{

		fontSize:50,
		margin:30,
		textAlign:'center'
	},

	questionTracker:{

		marginTop:30
	},

	correctButton:{
		color:'green',
		fontSize:20,
		
	},

	incorrectButton:{
		color:'red',
		fontSize:20,
	
	}
})
