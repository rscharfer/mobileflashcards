import React from 'react'
import { Stack } from './navigator/navigator'
import { setLocalNotification } from './utils/localNotifications.js'

export default class App extends React.Component {
	 componentDidMount () {
	 	setLocalNotification()
	 }

	 render () {
	    return <Stack />
	 }
}
