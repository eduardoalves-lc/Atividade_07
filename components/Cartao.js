import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

class Cartao extends Component {
    render() {
        return (
            <View style={styles.container}>{this.props.children}</View>
        );
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
      text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'teal',
      },
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    details: {
        fontWeight: '500',
        color: 'teal',
      },
});

export default Cartao;