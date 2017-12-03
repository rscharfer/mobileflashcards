import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'
import { addCardToDeck } from  '../utils/api.js'









export default class NewQuestionView extends Component {


	constructor(props){

		super(props);

		this.state={
			question:'',
			answer:'',
			//
			deck:this.props.navigation.state.params.deck

		}

		
	}

	handlePress = () => {

		if(this.state.question && this.state.answer) {
			alert('card added!')
			const updateDLV = this.props.navigation.state.params.updateDeckListView
			const updateDVS = this.props.navigation.state.params.updateDeckViewState
			addCardToDeck(this.state).then(()=>{
				updateDVS()
				updateDLV()
			})
			this.setState({
				question:'',
				answer:''
			})
		}

		else{

			alert('You need to enter both a question and answer')
		}
		
	}



	render() {

	  
		return (
		<View style={styles.container}>


			<TextInput
		
				style={styles.textInputBox}
				onChangeText={(question) => this.setState({question})}
				value={this.state.question}
				placeholder=" What is the color of the sky?"
			/>

			<TextInput
				
				style={styles.textInputBox}
				onChangeText={(answer) => this.setState({answer})}
				value={this.state.answer}
				placeholder=" Blue"
			/>
			<View>
				<Button
					title="Add Question"
					color="darkorange"
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