import {useReducer, useEffect} from 'react'
import axios from 'axios'
//Funcao pura
const reducer = (state, action) => {
    if(action.type === 'REQUEST') {
      return {
        ...state,
        loading: true
      }
    }
    if(action.type === 'SUCCESS') {
      return {
        ...state,
        loading: false,
        data: action.data
      }
    }
    //Manipula meu estado
    return state
  }
  
  const useGet = url => {
    const [data, dispatch] = useReducer(reducer, {
      lading: true,
      data: {}
    } )
    useEffect(() => {
      dispatch({type: 'REQUEST'})
      axios
        .get(url)
          .then(success => {          
            dispatch({type: 'SUCCESS', data: success.data})
          })
    }, [])
    return data
  }
  export default useGet