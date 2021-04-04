import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Botao extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonStyle}onPress={this.props.onPress}><Text style={styles.textStyle}>{this.props.title}</Text></TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'snow',
      },
      header: {
        width: '100%',
        padding: '10%',
        marginBottom: '50%',
        backgroundColor: 'lightblue',
        alignItems: 'center',
      },
      project: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'teal',
      },
      content: {
        marginTop: '10%',
      },
      textStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 17,
        fontWeight:'bold',
        fontWeight: '600',
        paddingTop: 12,
        paddingBottom: 12,
        },
      text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'teal',
      },
      details: {
        fontWeight: '500',
        color: 'teal',
      },
        buttonStyle: {        
        width:100,
        backgroundColor: '#fff',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#d1c0c0',
        margin: 5,
    },
});