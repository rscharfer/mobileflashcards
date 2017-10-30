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
			questionIsShown:true,
			correctAnswers:0,
			endOfDeck:false
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

			const updatedQuestionNumber = ++prevState.questionNumber
			console.log("uqn", updatedQuestionNumber)
			console.log('len',prevState.questions.length)


			if(updatedQuestionNumber>=prevState.questions.length){

				return {
				correctAnswers:++prevState.correctAnswers,
				endOfDeck:true,
				questionIsShown:true

				}

			}

			else {
				return {

				questionNumber:updatedQuestionNumber,
				correctAnswers:++prevState.correctAnswers,
				questionIsShown:true
				}
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

	handleRetake(){

		this.setState(

		{
			questionNumber:0,
			correctAnswers:0,
			questionIsShown:true,
			endOfDeck:false
		}

			)
	}


	render(){

		const state = this.state;
		let question, answer;

		if (!state.endOfDeck){

			question =  state.questions[state.questionNumber].question;
			answer = state.questions[state.questionNumber].answer;
		} 
		
		
		

		return (


			<View>

				{!state.endOfDeck && (
					<View>
						<View><Text style={styles.questionTracker}>{state.questionNumber + 1 }/{state.questions.length}</Text></View>

						<View styles={styles.container}>

							<Text style={styles.question}>
							{this.state.questionIsShown? question : answer}
							</Text>
						
							<CustomButton onPress={()=>this.handleQuestionAnswerFlip()} style={styles.flipper}>
							{ this.state.questionIsShown? "See Answer" : "See Question" }
							</CustomButton>
						
							 <CustomButton onPress={()=>this.handleCorrectPress()} style={styles.correctButton}>Correct</CustomButton>
							 <CustomButton onPress={()=>this.handleIncorrectPress()} style={styles.incorrectButton}>Incorrect</CustomButton>
						</View>
					</View>
					)
				}

				{ this.state.endOfDeck && 
					( 

						<View>

							<View>
								Great job! You got 
								<Text style={{color:blue}}> {state.correctAnswers} </Text> 
								of 
								<Text style={{color:blue}}> {state.questions.length} </Text> 
								correct. 
							</View>
							<CustomButton onPress={()=>this.handleRetake()} style={styles.retakeButton}>Retake Quiz</CustomButton>
						
						   	<CustomButton>Return to Deck</CustomButton>
					   	</View>


					 )

				}
		
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
	
	},

	retakeButton:{
		marginTop:20
	}
})
