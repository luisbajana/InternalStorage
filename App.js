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
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';




type Props = {};
export default class App extends Component<Props> {

  state = {
    nombre: '',
    listaNombres: []
  }

  async guardarNombre(){
    let nombre = this.state.nombre
   await AsyncStorage.setItem('nombres_db', nombre )
      .then( ()=>{
        console.log('Nombre guardado exitosamente')
      } )
  }

  async verNombres(){
    
    try {
      const value = await AsyncStorage.getItem('nombres_db');
      const arr = []
      if (value !== null){
        arr.push( JSON.stringify(value) )
        this.setState({
          listaNombres: arr
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
     <View style={styles.container}>

        <View>
        <TextInput 
          style={styles.input}
          placeholder="Guarda tu nombre"  
          value = { this.state.nombre }
          onChangeText = { (nombre)=>{ this.setState({ nombre: nombre }) } }
        />
        <TouchableWithoutFeedback onPress={()=>this.guardarNombre()}>
          <View style={styles.boton}>
            <Text style={styles.textoBoton}>Guardar</Text>
          </View>
        </TouchableWithoutFeedback>


        <TouchableWithoutFeedback onPress={()=>this.verNombres()}>
          <View style={styles.boton}>
            <Text style={styles.textoBoton}>Ver Nombres</Text>
          </View>
        </TouchableWithoutFeedback>

        <View>
          {
            this.state.listaNombres.map( (value , index)=>{
              return(
                <View>
                  <Text>{value}</Text>
                </View>
              )
            } )
          }
        </View>

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
  input: {
    borderWidth: 1,
    borderColor: '#666666',
    backgroundColor: '#FFFFFF',
    width: 200,
    height: 50,
    padding: 10
  },
  boton: {
    backgroundColor: '#666666',
    borderRadius: 5,
    height: 50,
    marginTop: 10
  },
  textoBoton: {
    color: '#FFFFFF',
    paddingTop: 16,
    alignSelf: 'center'
  }

});
