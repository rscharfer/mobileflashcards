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

		this.handlePress = this.handlePress.bind(this)
	}

	handlePress(){

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



	render() {

	  
		return (
		<View style={styles.container}>


			<TextInput
		
				style={styles.textInputBox}
				onChangeText={(question) => this.setState({question})}
				value={this.state.question}
				placeholder="What is the purpose of life?"
			/>

			<TextInput
				
				style={styles.textInputBox}
				onChangeText={(answer) => this.setState({answer})}
				value={this.state.answer}
				placeholder="To complete as many Udacity courses as possible"
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