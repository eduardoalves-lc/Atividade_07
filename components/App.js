import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Cartao from './Cartao';
import Item from './Item';
import Botao from './Botao';


export default class FirebaseApp extends Component {
  constructor(props) {
    super(props);
    this.state = {nome: '', Usuarios: []};
  }

  componentDidMount() { this.listaUsuarios()};

  getUsuario = async () => {
    const userDocument = await firestore().collection('Usuarios').doc('krUAIP9Q0B34Nakho730').get();
    this.setState({nome: userDocument._data.nome});
  };

  getUsuarios() {
    this.subscriber = firestore().collection('Usuarios').doc('krUAIP9Q0B34Nakho730').onSnapshot((doc) => {
    this.setState({nome: doc.data().nome});});
  };

  adicionarUsuarios = () => {
    firestore().collection('Usuarios').add({nome: 'Eduardo', }).then(() => {
        console.log('Ususario Adicionado!');
      }); this.listaUsuarios();
  };

  atualizarUsuarios = () => {
    firestore().collection('Usuarios').doc('krUAIP9Q0B34Nakho730').update({nome: 'Eduardo 02',}).then(() => {
        console.log('Usuario Atualizado!');
      });
    this.listaUsuarios();
  };

  deleteUsuarios = () => {firestore().collection('Usuarios').doc('krUAIP9Q0B34Nakho730').delete().then(() => {
        console.log('Usuario Deletado!');
      });
    this.listaUsuarios();
  };

  listaUsuarios() {
    firestore().collection('Usuarios').get().then((querySnapshot) => {let Usuarios = [];
        querySnapshot.forEach((documentSnapshot) => { Usuarios.push(documentSnapshot.data());});
        this.setState({Usuarios});
      });
  };

  renderUsuarios() {
    return (
      <FlatList data={this.state.Usuarios} renderItem={({item}) => {
          return (<View><Text style={{fontSize: 20}}>{item.nome}</Text></View>);
        }} keyExtractor={(item, index) => item + index}/>
    );
  }

  render() {
    return (
    <Cartao>
      <Item>{this.renderUsuarios()}</Item><Item>
      <Botao title="Adicionar Usuario" onPress={this.adicionarUsuarios} /></Item>
      </Cartao>
    );
  }
}
