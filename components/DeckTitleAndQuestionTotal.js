import React from 'react'
import { Text } from 'react-native'




export default function DeckTitleAndQuestionTotal (props){


	return (

		<Text>{props.title}&nbsp;&nbsp;&nbsp;{props.questionTotal}&nbsp;</Text>

		)
}