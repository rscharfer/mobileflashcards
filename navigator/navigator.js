import { StackNavigator } from 'react-navigation'
import DeckListView from '../components/DeckListView.js'
import NewDeckView from '../components/NewDeckView'


console.log('is tihs code being run??')

export const Stack = StackNavigator({

		Home : {
			screen: DeckListView,
			navigationOptions: {
      			headerTitle: 'Home',
    },
		},

		NewDeckView: {
			screen:NewDeckView,
			navigationOptions: {
      			headerTitle: 'New Deck',
    },
		}

		
	})


