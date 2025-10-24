import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [change, setChange] = useState(' Exemplo de alteração')
  const mudancaDeTexto = (e) => {
    setChange(e.target.value)
  }
  return (
    <>
      <div>
        <h1>Escreva seus dados</h1>
        {/* <p>{change}</p>
        <label htmlFor="id">texto</label>
        <input type='text' id='id' onChange={(e) => mudancaDeTexto(e)} /> */}
      </div>

      <fieldset>
        <legend>Nome</legend>
        <label htmlFor="1"></label>
        <input type="text" id='1' name='nome' />
      </fieldset>
      
      <fieldset>
        <legend>Idade</legend>
        <label htmlFor="2"></label>
        <input type="number" id='2' name='idade' />
      </fieldset>
      
      <fieldset>
        <legend>Telefone</legend>
        <label htmlFor="3"></label>
        <input type="number" id='3' name='telefone' />
      </fieldset>
      
      <fieldset>
        <legend>Instagram</legend>
        <label htmlFor="4"></label>
        <input type="text" id='4' name='instagram' />
      </fieldset>
      
      <fieldset>
        <legend>GitHub</legend>
        <label htmlFor="5"></label>
        <input type="text" id='5' name='github' />
      </fieldset>

      <fieldset>
        <legend>Pensamento</legend>
        <label htmlFor="6"></label>
        <input type="text" id='6' name='pensamento' />
      </fieldset>
      
      <fieldset>
        <legend>Probleminha</legend>
        <label htmlFor="7"></label>
        <input type="text" id='7' name='probleminha' />
      </fieldset>
      
      <fieldset>
        <legend>Última série</legend>
        <label htmlFor="8"></label>
        <input type="text" id='8' name='serie' />
      </fieldset>
      
      <fieldset>
        <legend>Último jogo</legend>
        <label htmlFor="9"></label>
        <input type="text" id='9' name='jogo' />
      </fieldset>
      
      <fieldset>
        <legend>Música</legend>
        <label htmlFor="10"></label>
        <input type="text" id='10' name='musica' />
      </fieldset>

      <fieldset>
        <legend>Gênero</legend>

        <div>
          <label htmlFor="masc">Masculino</label>
          <input type="radio" id="masc" name="genero" value="masc" />
        </div>

        <div>
          <label htmlFor="fem">Feminino</label>
          <input type="radio" id="fem" name="genero" value="fem" />
        </div>
      </fieldset>
      
      <fieldset>
        <legend>Habilidade especial</legend>
        <label htmlFor="11"></label>
        <input type="text" id='11' name='habilidade' />
      </fieldset>
      
      <fieldset>
        <legend>Poder especial</legend>
        <label htmlFor="12"></label>
        <input type="text" id='12' name='poder' />
      </fieldset>
      
      <fieldset>
        <legend>Time que você torce</legend>
        <label htmlFor="13"></label>
        <input type="text" id='13' name='time' />
      </fieldset>
      
      <button>Enviar informações</button>
    </>
  )
}

export default App
