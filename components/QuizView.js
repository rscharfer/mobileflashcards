import React, { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import CustomButton from 'react-native-button'

import { getDeck } from '../utils/api' 




export default class QuizView extends Component {



	// which deck will be on the props
	constructor(props){

		super(props)
		this.state = {

			questions:[],

			questionNumber:0,
			questionIsShown:true,
			correctAnswers:0,
			endOfDeck:false,
			deck:'Computers',
			
		}

	
	}


	componentDidMount(){


		getDeck(this.state.deck).then(result=>{

			console.log('coming back from the server',result.questions)

			this.setState({

				questions:result.questions
			})
		})

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

			const updatedQuestionNumber = ++prevState.questionNumber

			if(updatedQuestionNumber>=prevState.questions.length){

				return {
				endOfDeck:true,
				questionIsShown:true

				}


			}

			else{


				return {

				questionNumber:updatedQuestionNumber,
				questionIsShown:true
				}


			}

			
		})
	}

	handleBackToDeck(){

		// navigate back to Individual Deck View
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

		if (!state.endOfDeck && this.state.questions.length>0 ){

			question =  state.questions[state.questionNumber].question;
			answer = state.questions[state.questionNumber].answer;
		} 
		
		
		

		return (


			<View>
			
				{this.state.questions.length===0 && (

					<ActivityIndicator/>
				)}

				{!state.endOfDeck && this.state.questions.length>0 && (
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

				{ this.state.endOfDeck && this.state.questions.length>0 &&
					( 

						<View style={styles.container}>

							<View style={{marginTop:20}}>
							<Text>You correctly answered&nbsp; 
								<Text style={{color:'blue'}}>{state.correctAnswers}&nbsp;</Text> 
								of&nbsp; 
								<Text style={{color:'blue'}}>{state.questions.length}&nbsp;</Text>
								questions.</Text>
							</View>
							<CustomButton onPress={()=>this.handleRetake()} style={styles.retakeButton}>Retake Quiz</CustomButton>
						
						   	<CustomButton onPress={()=>this.handleBackToDeck()}>Back to Deck</CustomButton>
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
