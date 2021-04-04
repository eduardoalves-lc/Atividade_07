import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

class Item extends Component {
    render() {
        return (
            <View style={[styles.container,this.props.style]}>{this.props.children}</View>
        )
    }
}

const styles = StyleSheet.create({
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
    container: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#ffffff',
        borderColor: '#dddddd',
        position: 'relative',
        justifyContent: 'flex-start',
        flexDirection: 'row',
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
})

export default Item;