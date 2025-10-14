import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState(' Escreva seus dados')
  const mudancaDeTitulo = (e) => {
    setTitle(e.target.value)
  }
  return (
    <>
      <div>
        <p>{title}</p>
        <label htmlFor="id">titulo</label>
        <input type='text' id='id' onChange={(e) => mudancaDeTitulo(e)} />
      </div>
      <div>
        <label htmlFor="1">nome</label>
        <input type="text" id='1' name='nome' />
      </div>
      <div>
      <label htmlFor="2">idade</label>
      <input type="number" id='2' name='idade' />
      </div>
      <div>
        <label htmlFor="3">Email</label>
        <input type="email" id='3' name='email' />
      </div>
      <div>
        <label htmlFor="4">data de nascimento</label>
        <input type="date" id='4' name='data' />
      </div>
    </>
  )
}

export default App
