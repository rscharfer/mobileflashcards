import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

// inspired by https://stackoverflow.com/questions/38215422/text-wrap-with-chevron-on-right-in-react-native-listview-item-renderer

export default function DeckListItem ({title, noOfCards, navigation, updateDeckListView}) {
  function handlePress () {
    navigation.navigate('IndividualDeck', {title, noOfCards, updateDeckListView})
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.cardNumber}>{noOfCards} cards</Text>
        </View>
        <View style={styles.chevron}>
          <Icon name='chevron-right' size={25} />
        </View>
      </View>
    </TouchableOpacity >

  )
}

const styles = StyleSheet.create({

  container: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: 'darkorange',
    borderBottomWidth: 1
  },

  title: {

    fontSize: 20,
    color: 'darkorange'
  },

  cardNumber: {
    fontSize: 12,
    color: 'gray'
  },

  chevron: {
    flexDirection: 'column',
    justifyContent: 'center'
  }

})
