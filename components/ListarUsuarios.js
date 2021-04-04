import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import ConfirmationModal from '../ConfirmationModal'
import firestore from '@react-native-firebase/firestore'
import Botao from './Botao'
import Cartao from './Cartao'
import Item from './Item'


export default class ListarUsuarios extends Component {

    constructor(props) {
        super(props)
        this.state = { Usuarios: [], modalVisible: false, DeletedId: '' }
    }

    componentDidMount() {this.ListarUsuarios()}

    deletarUsuarios = (id) => {firestore().collection('Usuarios').doc(id).delete().then(() => {
          console.log('Usuario Deletado!');
        });
      this.ListarUsuarios();
    };

    ListarUsuarios() {
        firestore().collection('Usuarios').get().then(querySnapshot => {
                let Usuarios = []
                querySnapshot.forEach( documentSnapshot => {
                        console.log('ID Usuario: ', documentSnapshot.id, documentSnapshot.data());
                        Usuarios.push({data: documentSnapshot.data(), id: documentSnapshot.id})}); 
                        console.log('LISTA DE USUARIOS');
                this.setState({ Usuarios })
            });
    }

    renderUsuarios() {
        return (
            <FlatList
                data={this.state.Usuarios}
                renderItem={({ item }) => {
                        return (
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}>
                                <View style={{ flex: 1.5 }}>
                                    <Text style={{ fontSize: 18 }}>{item.data.nome}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Botao
                                        title='Editar'
                                        onPress={
                                            () => this.props.navigation.navigate('EditarUsuarios', {nome: item.data.nome, id: item.id,
                                              goBackAndUpdateList: () => this.ListarUsuarios()
                                             })
                                        }
                                    />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Botao title='Deletar' onPress={() => this.setState({DeletedId: item.id, modalVisible: true})}/>
                                </View>
                            </View>
                        )
                    }} keyExtractor={(item, index) => item + index}/>
        )
    }

    render() {
        return (
          <View>
            <Cartao><Item><Text style={{ fontSize: 18, fontWeight: 'bold' }}>Listar Usuarios</Text></Item>
                <Item>{this.renderUsers()}</Item>
                <Item>
                    <Botao
                        title='Adicionar Usuarios'
                        onPress={() => this.props.navigation.navigate('AdicionarUsuarios', {goBackAndUpdateList: () => this.ListarUsuarios()})} />
                </Item>
            </Cartao>
            
            <ConfirmationModal modalVisible={this.state.modalVisible}
              message='Deseja continuar com a exclusão?'
              deleteUser={() => {
                  this.deletarUsuarios(this.state.DeletedId)
                  this.setState({modalVisible: false})}
              }
              closeModal={() => {this.setState({modalVisible: false, DeletedId: ''})
                }
              }
            />
          </View>
        )
    }
}

