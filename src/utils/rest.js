import { useReducer, useEffect } from 'react'
import axios from 'axios'

const INITIAL_STATE = {
    lading:false,
    data: {}
}

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

const init = baseUrl => {
    const useGet = resource => {
        const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
        const carregar = async() => {
          dispatch({type: 'REQUEST'})
          const res = await axios.get(baseUrl + resource + '.json')
          dispatch({type: 'SUCCESS', data: res.data})
        }
        useEffect(() => {
          carregar()
        }, [resource])
        return {
          ...data,
          refetch: carregar
        }
    }

    const usePost = resource => {
        const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
        const post = async(data) => {
          dispatch({type: 'REQUEST'})
          const res = await axios.post(baseUrl + resource + '.json', data)
          dispatch({
            type: 'SUCCESS',
            data: res.data
          })
             
        }
        return [data, post]
    }

    const useDelete = () => {
        const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
        const remove = async(resource)  => {
            dispatch({type: 'REQUEST'})
            await axios
              .delete(baseUrl + resource +'.json')
              dispatch({
                  type: 'SUCCESS'
              })
           
        }
        return [data, remove]
    }

    return {
        useGet,
        usePost,
        useDelete
    }
}
  export default init