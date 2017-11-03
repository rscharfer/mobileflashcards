import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'



const NOTIFICATIONKEY = 'NOTIFICATIONS_APP_RYAN'







export function setLocalNotifcation(){

	AsyncStorage.getItem(NOTIFICATIONKEY)

	.then(JSON.parse)

	.then((data)=>{

		if(data===null) {
			Permissions.askAsync(Permissions.NOTIFICATIONS)

			then(({ status })=> {

				if (status === "granted"){

					Notifications.cancelAllScheduledNotificationsAsync()
					let tomorrow = new Date();
					tomorrow.setDate(tomorrow.getDate()*1)
					tomorrow.setHours(20)
					tomorrow.setMinutes(0)

					Notifications.scheduleLocalNotificationsAysnc(

						createNotification(),
						{
							time:tomorrow,
							repeat:'day',
						}
					)

					AsyncStorage.setItem(NOTIFICATIONKEY, JSON.stringify(true))
				}


			})
		}
	})
}



export function clearLocalNotifications(){


	return AsyncStorage.removeItem(NOTIFICATIONKEY).

	then(Notifications.cancelAllScheduledNotificationsAsync)
}


function createNotification(){


	return {

		title: "Quiz completed?",
		body: "Don't forget to complete your quiz for the day?",

		android:{
			sound:true,
			priority:'high',
			sticky:false,
			vibrate:true
		}
}}