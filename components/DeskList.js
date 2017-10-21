import React from 'react';
import { StyleSheet, View } from 'react-native';
import DeckTitle from 'components/DeckTitle.js';

export default class DeskList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckTitle/>
        <DeckTitle/>
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});