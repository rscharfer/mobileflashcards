import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native'
import { getDecks } from '../utils/api'
import NewDeckView from './NewDeckView'
import DeckListItem from './DeckListItem'

export default class DeckListView extends Component {
		state = {
			decks : []
		}
		componentDidMount(){
			this.updateDeckListView()
		}
		updateDeckListView = () => {
				getDecks()
				.then( result => {
					if(result) {
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
						<View style={{flexDirection:'row',justifyContent:'center'}}>
							<Text style={styles.header}>Decks</Text>
						</View>
						<FlatList data={this.state.decks} renderItem={({item})=><DeckListItem updateDeckListView={this.updateDeckListView} navigation={this.props.navigation} title={item.title} noOfCards={item.questions?item.questions.length:0}/>} />
						<Button color="darkorange" title="New Deck" onPress={()=>{this.props.navigation.navigate('NewDeckView',{updateDeckListView:this.updateDeckListView})}}/>
					</View>
			)
		}		
}

const styles = StyleSheet.create({
	header:{
		fontSize:30
	},
	container:{
		flex:1,
		justifyContent:'flex-start',
		padding:20
	}
})





