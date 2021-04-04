import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import Cartao from './Cartao'
import Item from './Item'
import Botao from './Botao'

export default class EditarUsuarios extends Component {
    
    constructor(props){
        super(props)
        this.state = {nome: this.props.route.params.nome, id: this.props.route.params.id}
    }
    
    atualizzarUsuarios = () => { console.log(this.state.id, this.state.nome)
      firestore().collection('Usuarios').doc(this.state.id).update({nome: this.state.nome,
        })
        .then(() => {console.log('Uaurio Atualizado!');
        });
    };

    render() {
        return (
            <Cartao>
                <Item><Text>Editar Usuarios</Text></Item>
                <Item><TextInput onChangeText={(nome) => this.setState({ nome })} value={this.state.nome}/></Item>
                <Item>
                    <Botao title='Atualizar' onPress={() => { this.atualizzarUsuarios()
                            this.props.route.params.goBackAndUpdateList();
                            this.props.navigation.goBack()
                          }}
                        />
                    <Botao title='Voltar' onPress={() => this.props.navigation.goBack()}/>
                </Item>
            </Cartao>
        )
    }
}