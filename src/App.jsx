import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [name, setName] = useState('')
  // const [age, setAge] = useState('')
  // const [telephone, setTelephone] = useState('')
  // const [instagram, setInstagram] = useState('')
  // const [github, setGithub] = useState('')
  // const [thought, setThought] = useState('')
  // const [problem, setProblem] = useState('')
  // const [serie, setSerie] = useState('')
  // const [game, setGame] = useState('')
  // const [music, setMusic] = useState('')
  // const [gender, setGender] = useState('')
  // const [ability, setAbility] = useState('')
  // const [power, setPower] = useState('')]
  // const [team, setTeam] = useState('')]

  const mudancaDeEmail = (e) => {
    setEmail(e.target.value);
  }

  const mudancaDeSenha = (e) => {
    setPassword(e.target.value)
  }

  // const mudancaDeNome = (e) => {
  //   setName(e.target.value)
  // }
  // const mudancaDeIdade = (e) => {
  //   setAge(e.target.value)
  // }
  // const mudancaDeTelefone = (e) => {
  //   setTelephone(e.target.value)
  // }
  // const mudancaDePerfil = (e) => {
  //   setInstagram(e.target.value)
  // }
  // const mudancaDeUsuario = (e) => {
  //   setGithub(e.target.value)
  // }
  // const mudancaDePensamento = (e) => {
  //   setThought(e.target.value)
  // }
  // const mudancaDeProblema = (e) => {
  //   setProblem(e.target.value)
  // }
  // const mudancaDeSerie = (e) => {
  //   setSerie(e.target.value)
  // }
  // const mudancaDeJogo = (e) => {
  //   setGame(e.target.value)
  // }
  // const mudancaDeMusica = (e) => {
  //   setMusica(e.target.value)
  // }
  // const mudancaDeGenero = (e) => {
  //   setGender(e.target.value)
  // }
  // const mudancaDeHabilidade = (e) => {
  //   setbility(e.target.value)
  // }
  // const mudancaDePoder = (e) => {
  //   set(e.target.value)
  // }
  // const mudancaDeTime = (e) => {
  //   set(e.target.value)
  // }

  const enviarForms = (e) => {
    e.preventDefault()
    fetch('https://www.api.alanleiser.com/', {
      method: 'POST',
      body: JSON.stringify()
    })
  }
  console.log(`Email: ${email}, Senha: ${password}`)


// useEffect(() => {
//   fetch('https://www.api.alanleiser.com/')
//     .then(response => response.json())
//     .then(get => console.log(get))
// })

return (
  <>
    <section>
      <h2>Cadasatro de Usuário</h2>
      <div>
        <form onSubmit={enviarForms}>
          <label htmlFor="email">email</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={(e) => mudancaDeEmail(e)}
          />

          <label htmlFor="password">senha</label>
          <input
            id='password'
            type='password'
            name='senha'
            value={password}
            onChange={(e) => mudancaDeSenha(e)}
          />
          {/* <label htmlFor="name">nome</label>
            <input
              id='name'
              type='text'
              name='nome'
              value={text}
              onChange={(e) => mudancaDeNome(e)}
              />
            <label htmlFor="age">idade</label>
            <input
              id='age'
              type='number'
              name='idade'
              value={number}
              onChange={(e) => mudancaDeIdade(e)}
              />
            <label htmlFor=""></label>
            <input
              id=''
              type=''
              name=''
              value={}
              onChange={(e) => mudancaDeTelefone(e)}
              />
            <label htmlFor=""></label>
            <input
              id=''
              type=''
              name=''
              value={}
              onChange={(e) => mudancaDePerfil(e)}
              />
            <label htmlFor=""></label>
            <input
              id=''
              type=''
              name=''
              value={}
              onChange={(e) => mudancaDeUsuario(e)}
              />
            <label htmlFor=""></label>
            <input
              id=''
              type=''
              name=''
              value={}
              onChange={(e) => mudancaDePensamento(e)}
              />
            <label htmlFor=""></label>
            <input
              id=''
              type=''
              name=''
              value={}
              onChange={(e) => mudancaDeProblema(e)}
              />
            <label htmlFor=""></label>
            <input
              id=''
              type=''
              name=''
              value={}
              onChange={(e) => mudancaDeSerie(e)}
              />
            <label htmlFor=""></label>
            <input
              id=''
              type=''
              name=''
              value={}
              onChange={(e) => mudancaDeJogo(e)}
              />
            <label htmlFor=""></label>
            <input
              id=''
              type=''
              name=''
              value={}
              onChange={(e) => mudancaDeMusica(e)}
              />
            <label htmlFor=""></label>
            <input
              id=''
              type=''
              name=''
              value={}
              onChange={(e) => mudancaDeGenero(e)}
              />
            <label htmlFor=""></label>
            <input
              id=''
              type=''
              name=''
              value={}
              onChange={(e) => mudancaDeHabilidade(e)}
              />
            <label htmlFor=""></label>
            <input
              id=''
              type=''
              name=''
              value={}
              onChange={(e) => mudancaDePoder(e)}
              />
            <label htmlFor=""></label>
            <input
              id=''
              type=''
              name=''
              value={}
              onChange={(e) => mudancaDeTime(e)}
              />*/}
          <button type='submit'>Enviar informações</button>
        </form>
      </div>
    </section>
  </>
)
}

export default App
