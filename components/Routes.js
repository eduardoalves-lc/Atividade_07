import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ListarUsuarios from './ListarUsuarios'
import EditarUsuarios from './AtualizarUsuarios'
import AdicionarUsuarios from './AdicionarUsuarios'

const MainStack = createStackNavigator()
function MainStack() {
    return(
        <NavigationContainer>
            <MainStack.Navigator>
            <MainStack.Screen name = 'AdicionarUsuarios'
                    component = {AdicionarUsuarios}
                    options = {{headerShown:false}}
                />
                <MainStack.Screen name = 'EditarUsuarios'
                    component = {EditarUsuarios}
                    options = {{headerShown:false}}
                />
                <MainStack.Screen name = 'ListarUsuarios'
                    component = {ListarUsuarios}
                    options = {{headerShown:false}}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack