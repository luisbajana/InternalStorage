/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  TouchableWithoutFeedback
} from 'react-native';



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <View style={styles.container}>
        <View>
        <TextInput placeholder="Guarda tu nombre" />
        <TouchableWithoutFeedback>
          <Text>Guardar</Text>
        </TouchableWithoutFeedback>
      </View>

      
        /*
          Presentacion de datos
        */
      
      <View>
        
      </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
