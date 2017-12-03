import React, { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import CustomButton from 'react-native-button'
import { getDeck } from '../utils/api' 

export default class QuizView extends Component {

	constructor(props){

		super(props)
		this.state = {
			questions:[],
			questionNumber:0,
			questionIsShown:true,
			correctAnswers:0,
			endOfDeck:false,
			deck:this.props.navigation.state.params.deck,
		}
	}

	

	componentDidMount(){

		getDeck(this.state.deck).then(result=>{
			this.setState({
				questions:result.questions
			})
		})
	}

	handleQuestionAnswerFlip = () => {

		this.setState((prevState)=>{
			return {
				questionIsShown:!prevState.questionIsShown
			}
		})
	}

	handleCorrectPress = () => {

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

	handleIncorrectPress = () => {

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

	handleBackToDeck = () => {
		   const {goBack} = this.props.navigation;
		   goBack();
	}

	handleRetake = () => {
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

						<View style={styles.container}>

							<View style={{height:300}}>
								<Text numberOfLines={6} style={styles.question}>
								{this.state.questionIsShown? question : answer}
								</Text>
							</View>
						
							<CustomButton onPress={this.handleQuestionAnswerFlip} style={styles.flipper}>
							{ this.state.questionIsShown? "See Answer" : "See Question" }
							</CustomButton>
						
							 <CustomButton onPress={this.handleCorrectPress} style={styles.correctButton}>Correct</CustomButton>
							 <CustomButton onPress={this.handleIncorrectPress} style={styles.incorrectButton}>Incorrect</CustomButton>
						</View>
					</View>
				)}

				{this.state.endOfDeck && this.state.questions.length>0 && ( 

					<View style={styles.container}>

						<View style={{marginTop:20}}>
						<Text>You correctly answered&nbsp; 
							<Text style={{color:'gray'}}>{state.correctAnswers}&nbsp;</Text> 
							of&nbsp; 
							<Text style={{color:'gray'}}>{state.questions.length}&nbsp;</Text>
							questions.</Text>
						</View>
						<CustomButton onPress={this.handleRetake} style={styles.retakeButton}>Retake Quiz</CustomButton>
					
					   	<CustomButton onPress={this.handleBackToDeck} style={{color:'#A40000'}}>Back to Deck</CustomButton>
				   	</View>


				)}
		
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
		color:"gray",
		marginBottom:20,
		fontSize:10
	},

	question:{

		fontSize:35,
		margin:30,
		textAlign:'center',
		textAlignVertical:'center'

	},

	questionTracker:{

		marginTop:30
	},

	correctButton:{
		color:'darkorange',
		fontSize:20,
		
	},

	incorrectButton:{
		color:'#A40000',
		fontSize:20,
	
	},

	retakeButton:{
		marginTop:20,
		color:'darkorange'
	}
})
