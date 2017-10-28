import React from 'react'
import { Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import NewDeckView from './NewDeckView'


const Stack = StackNavigator({

		Home : {
			screen: DeckListView
		},

		NewDeckView: {
			screen:NewDeckView
		}

		
	})




export default class DeckListView extends React.Component {

	

	render (){

		const { navigate } = this.props.navigation;
		return (
		
		<View>

			<Text>Deck</Text>
			<Text>Testes- alert </Text>
		
				<View>
		
				 </View>
			<Button title="New Deck" onpress={()=>navigate('NewDeckView',{name:'New Deck'})}/>
		</View>

	)



	}
		
}

// How odo
// is the StackNavigator function called only once in an app