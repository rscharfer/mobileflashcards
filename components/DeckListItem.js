import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'




export default function DeckListItem ({title, noOfCards, navigation, updateDeckListView}){



	function handlePress(){
		navigation.navigate('IndividualDeck', {title,noOfCards, updateDeckListView})
	}

	return (
		<View style={styles.container} onPress={()=>handlePress()}>
			<View>
				<Text style={{fontSize:18, color:'#A40000'}}>{title}</Text>
				<Text style={{fontSize:12}}>{noOfCards}</Text>
			</View>
			<View>
				<Icon name="chevron-right" size={15}/>
			</View>
		</View>

	)
}


// inspired by https://stackoverflow.com/questions/38215422/text-wrap-with-chevron-on-right-in-react-native-listview-item-renderer

const styles = StyleSheet.create({


	container:{

		
		flexDirection:'row',
		justifyContent:'space-between'
	}
})