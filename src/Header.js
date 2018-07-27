import React, {Component} from 'react'
import { View, Text } from 'react-native'


class Header extends Component{

    render(){
        return(
            <View style={styles.estiloHeader}>
                <Text style={styles.estiloLabel}>Hola Mundo</Text>
            </View>
        )
    }

}


const styles = {
    estiloHeader:{
        backgroundColor: '#000000',
        position: 'absolute',
        top: 0
    },

    estiloLabel:{
        color: '#FFFFFF',
        fontSize: 32
    }
}

export default Header