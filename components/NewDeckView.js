import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'
import { saveDeckTitle } from  '../utils/api.js'

export default class NewDeckView extends Component {
	state= { deckName:'' }

	handlePress = () => {
		const deckname = this.state.deckName;
		if(deckname){
			const updateDLV = this.props.navigation.state.params.updateDeckListView
			saveDeckTitle(deckname).then(()=>updateDLV())
			this.setState({
				deckName:''
			})
			this.props.navigation.goBack();
		}
		else{
			alert('You need to add a deck')
		}
	}
	render() {
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
		fontSize:30,
		textAlign:'center'
	},
})