import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import Cartao from './Cartao'
import Item from './Item'
import Botao from './Botao'

export default class AdicionarUsuarios extends Component {
    
    constructor(props){
        super(props)
        this.state = {nome:''}
    }

    adicionarUsuarios = async (nome) => { await firestore().collection('Usuarios').add({ nome: nome,
        }).then(() => { console.log('Usuario Adicionado!');});
    };

    render() {
        return (
            <Cartao>
                <Item><Text>Aidcionar Usuario</Text></Item>
                <Item><TextInput onChangeText={(text) => this.setState({ nome: text })} placeholder='Digite o nome'/></Item>
                <Item><Botao title='Adicionar Usuario' 
                    onPress={ () => { this.adicionarUsuarios(this.state.nome);
                        this.props.route.params.goBackAndUpdateList();
                        this.props.navigation.goBack();
                      }}
                    />
                    <Botao title='Voltar' onPress={() => {this.props.navigation.goBack()}}/>
                </Item>
            </Cartao>
        )
    }
}