import React from 'react'
import { Text } from 'react-native'




export default function DeckListItem ({name, noOfCards}){


	return (

		<Text>{name}&nbsp;&nbsp;&nbsp;{noOfCards}&nbsp;</Text>

		)
}