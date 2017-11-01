import { StackNavigator } from 'react-navigation'
import DeckListView from '../components/DeckListView'
import NewDeckView from '../components/NewDeckView'
import IndividualDeckView from '../components/IndividualDeckView'



export const Stack = StackNavigator({

		


		DeckListView : {
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
		},

		IndividualDeck: {
			screen:IndividualDeckView,
			navigationOptions: {
      			headerTitle: 'IndividualDeckView',
    },
		},



		
	})



