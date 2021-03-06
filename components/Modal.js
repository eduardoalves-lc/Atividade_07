import React, {Component} from 'react';
import {Modal, StyleSheet, View, Text, TouchableHighlight} from 'react-native';

export default class ConfirmationModal extends Component {

  render() {
    const { modalVisible, message } = this.props;
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{message}</Text>

          <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
            <TouchableHighlight
              style={{backgroundColor: "red", width: 100, padding: 15, marginRight: 25}}
              onPress={this.props.deleteUser}
            >
              <Text style={styles.buttonText}>Sim</Text></TouchableHighlight>

            <TouchableHighlight
              style={{backgroundColor: "#2196F3", width: 100, padding: 15 }}
              onPress={this.props.closeModal}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'snow',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '720'
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20
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
  modalView: {
    margin: 18,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6
  },
})