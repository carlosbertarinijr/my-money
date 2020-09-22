import React from 'react'
import useGet from './useGet'
const url = 'https://mymoney-top.firebaseio.com/movimentacoes/2020-09.json'


function App() {
  const data = useGet(url)

  return (
    <div>
      <h1>myMoney</h1>
      {JSON.stringify(data)}
      {data.loading && <p>Carregando...</p>}
    </div>
  )
}

export default App
