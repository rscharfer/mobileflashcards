import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native'
import { getDecks } from '../utils/api'
import NewDeckView from './NewDeckView'
import DeckListItem from './DeckListItem'






export default class DeckListView extends Component {

		constructor(props){
			super(props)
			this.state = {
				decks: []
			}
		}


		componentDidMount(){
			this.updateDeckListView()
		}

		updateDeckListView = () => {
				getDecks()
				.then( result => {
					if (!result) {}
					else {

						const parsedResult = JSON.parse(result);
						const deckNames = Object.keys(parsedResult);
						const deckObjects  = [];
						deckNames.forEach( deckName => {
							parsedResult[deckName].key = parsedResult[deckName].title	 
							deckObjects.push(parsedResult[deckName])
						})
						this.setState({
							decks:deckObjects
						})
					}
				})

		}
	
		render(){
			return (
					<View style={styles.container}>
						<Text style={styles.header}>Decks</Text>
						<FlatList data={this.state.decks} renderItem={({item})=><DeckListItem updateDeckListView={this.updateDeckListView} navigation={this.props.navigation} title={item.title} noOfCards={item.questions?item.questions.length:0}/>} />
						<Button color="darkorange" title="New Deck" onPress={()=>{this.props.navigation.navigate('NewDeckView',{updateDeckListView:this.updateDeckListView})}}/>
					</View>

			)
		}		
}


const styles = StyleSheet.create({


	header:{
		fontSize:30,
		margin:20,

	},

	container:{

		flex:1,
		justifyContent:'flex-start',
		alignItems:'center'
	}
})





