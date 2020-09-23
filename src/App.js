import React from 'react'
import Rest from './rest'

const baseUrl = 'https://mymoney-top.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseUrl)

function App() {
  const data = useGet('movimentacoes/2020-09')
  const [postData, post] = usePost('movimentacoes/2020-09')
  const [deleteDate, remove] = useDelete()
  
  const saveNew = () => {
    post({valor: 10, descricao: 'Vou ser excluído'})
  }

  const doRemove = () => {
    remove('movimentacoes/2020-09/-MHwJudRiAT5qsrZGACY')
  }
  return (
    <div>
      <h1>myMoney</h1>
      {JSON.stringify(data)}
      {data.loading && <p>Carregando...</p>}
      <button onClick={saveNew}>Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
      <button onClick={doRemove}>Delete</button>
      <pre>{JSON.stringify(deleteDate)}</pre>
    </div>
  )
}

export default App
