import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from 'react-native-button'




export default function DeckListItem ({title, noOfCards, navigation}){



	function handlePress(){



		navigation.navigate('IndividualDeck', {title,noOfCards})
	}

	return (

		<CustomButton style={styles.container} onPress={()=>handlePress()}>
			<Text>{title}</Text>
			<Text>{noOfCards}</Text>
		</CustomButton>

		)
}


const styles = StyleSheet.create({


	container:{

		flexDirection:'row',
		justifyContent:'space-between'


	}
})