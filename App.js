import { switchCase } from "@babel/types";
import React, {
  useReducer
} from "react";

import {
  Button,
  Text,
  View
} from 'react-native'

const ACTIONS = {
    INCREMENTAR : "INCREMENTAR",
    DECREMENTAR : "DECREMENTAR",
    RESETAR : "RESETAR"
}

const reducer = (stateAtual, action) => {
  switch( action.type ) {
    case ACTIONS.INCREMENTAR:
      return stateAtual + 1
    case ACTIONS.DECREMENTAR:
      return stateAtual -1
    case ACTIONS.RESETAR:
      return 0
    default:
      return stateAtual
  }

}

const App = () => {
  const [contador, dispatch] = useReducer(reducer, 0)

  return (
    <View>
      <Text>Contador: {contador}</Text>

      <Button 
      onPress={() => dispatch({ type : ACTIONS.INCREMENTAR })}
      title='Incrementar'/>

      <Button 
      onPress={() => dispatch({ type : ACTIONS.DECREMENTAR })}
      title='Descrementar'/>

      <Button 
      onPress={() => dispatch({ type : ACTIONS.RESETAR })}
      title='Resetar'/>

    </View>
  )
}

export default App