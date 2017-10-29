import React from 'react'
import { Text } from 'react-native'




export default function DeckListItem ({title, noOfCards}){


	return (

		<Text>{title}&nbsp;&nbsp;&nbsp;{noOfCards}&nbsp;</Text>

		)
}