import React from 'react'
import Rest from './rest'
import Header from './elements/Header'
import Meses from './Meses'
import AdicionarMes from './AdicionarMes'

const baseUrl = 'https://mymoney-top.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseUrl)

function App() {
  // const data = useGet('movimentacoes/2020-09')
  const data = useGet('meses')

  // const [postData, post] = usePost('movimentacoes/2020-09')
  // const [deleteDate, remove] = useDelete()
  
  const saveNew = () => {
    // post({valor: 10, descricao: 'Vou ser excluído'})
  }

  const doRemove = () => {
    // remove('movimentacoes/2020-09/-MHwJudRiAT5qsrZGACY')
  }
  return (
    <div>
      <Header />
      <div className='container'>
        <AdicionarMes />
        <Meses />
      </div>
    </div>
  )
}

export default App
