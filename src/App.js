import React from 'react'
import useGet from './useGet'
import usePost from './usePost'

const url = 'https://mymoney-top.firebaseio.com/movimentacoes/2020-09.json'


function App() {
  const data = useGet(url)
  const [postData, post] =  usePost(url)

  const saveNew = () => {
    post({valor: 10, descricao: 'Olá Wayner'})
  }
  return (
    <div>
      <h1>myMoney</h1>
      {JSON.stringify(data)}
      {data.loading && <p>Carregando...</p>}
      <button onClick={saveNew}>Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
    </div>
  )
}

export default App
