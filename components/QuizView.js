import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { getDeck } from '../utils/api' 



export default class QuizView extends Component {



	// which deck will be on the props
	constructor(props){

		super(props)
		this.state = {

			questions:[],
			questionNumber:0,
			questionIsShown:true
		}

		this.flipCard = this.flipCard.bind(this);
	}



	componentDidMount(){

		getDeck(this.props.deck).then(deck=>{

			this.setState({
				questions:deck.questions
			})
		})

	}



	flipCard(){

		this.setState((prevState)=>{

			return {

				questionIsShown:!prevState.questionIsShown
			}
		})
	}


	render(){

		const question = this.state.questions[questionNumber];

		return (

			<View>
				<View><Text>{props.questionNumber}/{props.totalQuestions}</Text></View>

				<View>

					<Text style={styles.question}>{props.question}</Text>
					<Text style={styles.answer}> See Answer </Text>
					<Button style={styles.correctButton}/>
					<Button style={styles.incorrectButton}/>



				</View>
			</View>
		)

	}

}


