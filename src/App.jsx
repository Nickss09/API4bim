import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [phone, setTelephone] = useState('')
  const [instagram, setInstagram] = useState('')
  const [github, setGithub] = useState('')
  const [thought, setThought] = useState('')
  const [problem, setProblem] = useState('')
  const [lastSeries, setSerie] = useState('')
  const [lastGame, setGame] = useState('')
  const [music, setMusic] = useState('')
  const [genre, setGender] = useState('')
  const [specialSkill, setAbility] = useState('')
  const [specialPower, setPower] = useState('')
  const [favoriteTeam, setTeam] = useState('')
  const [bibleVerse, setVerse] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const mudancaDeNome = (e) => {
    setName(e.target.value)
  }
  const mudancaDeIdade = (e) => {
    setAge(e.target.value)
  }
  const mudancaDeTelefone = (e) => {
    setTelephone(e.target.value)
  }
  const mudancaDePerfil = (e) => {
    setInstagram(e.target.value)
  }
  const mudancaDeUsuario = (e) => {
    setGithub(e.target.value)
  }
  const mudancaDePensamento = (e) => {
    setThought(e.target.value)
  }
  const mudancaDeProblema = (e) => {
    setProblem(e.target.value)
  }
  const mudancaDeSerie = (e) => {
    setSerie(e.target.value)
  }
  const mudancaDeJogo = (e) => {
    setGame(e.target.value)
  }
  const mudancaDeMusica = (e) => {
    setMusic(e.target.value)
  }
  const mudancaDeGenero = (e) => {
    setGender(e.target.value)
  }
  const mudancaDeHabilidade = (e) => {
    setAbility(e.target.value)
  }
  const mudancaDePoder = (e) => {
    setPower(e.target.value)
  }
  const mudancaDeTime = (e) => {
    setTeam(e.target.value)
  }
  const mudancaDeVerso = (e) => {
    setVerse(e.target.value)
  }
  const mudancaDeEmail = (e) => {
    setEmail(e.target.value);
  }

  const mudancaDeSenha = (e) => {
    setPassword(e.target.value)
  }

  const enviarForms = (e) => {
    e.preventDefault()
    fetch('https://www.api.alanleiser.com/', {
      method: 'POST',
      body: JSON.stringify()
    })
  }
  console.log(`
  Nome: ${name},
  Idade: ${age},
  Telefone: ${phone},
  Instagram: ${instagram},
  Github: ${github},
  Pensamento: ${thought},
  Problema: ${problem},
  Última série: ${lastSeries},
  Último jogo: ${lastGame},
  Música: ${music},
  Gênero musical: ${genre},
  Habilidade Especial: ${specialSkill},
  Poder especial: ${specialPower},
  Time favorito: ${favoriteTeam},
  Verso da Bíblia: ${bibleVerse},
  Email: ${email},
  Senha: ${password}
  `)

  // useEffect(() => {
  //   fetch('https://www.api.alanleiser.com/')
  //     .then(response => response.json())
  //     .then(get => console.log(get))
  // })

  return (
    <>
      <section>
        <h2>Cadasatro de Usuário</h2>
        <div className='container'>
          <form onSubmit={enviarForms}>
            <label htmlFor="name">nome</label>
            <input
              id='name'
              type='text'
              name='nome'
              value={name}
              onChange={(e) => mudancaDeNome(e)}
            />
            <label htmlFor="age">idade</label>
            <input
              id='age'
              type='number'
              name='idade'
              value={age}
              onChange={(e) => mudancaDeIdade(e)}
            />
            <label htmlFor="telephone">telefone</label>
            <input
              id='telephone'
              type='number'
              name='telefone'
              value={phone}
              onChange={(e) => mudancaDeTelefone(e)}
            />
            <label htmlFor="instagram">instagram</label>
            <input
              id='instagram'
              type='text'
              name='instagram'
              value={instagram}
              onChange={(e) => mudancaDePerfil(e)}
            />
            <label htmlFor="github">github</label>
            <input
              id='github'
              type='text'
              name='github'
              value={github}
              onChange={(e) => mudancaDeUsuario(e)}
            />
            <label htmlFor="thought">pensamento</label>
            <input
              id='thought'
              type='text'
              name='pensamento'
              value={thought}
              onChange={(e) => mudancaDePensamento(e)}
            />
            <label htmlFor="problem">problema</label>
            <input
              id='problem'
              type='text'
              name='problema'
              value={problem}
              onChange={(e) => mudancaDeProblema(e)}
            />
            <label htmlFor="serie">ultima serie</label>
            <input
              id='serie'
              type='text'
              name='serie'
              value={lastSeries}
              onChange={(e) => mudancaDeSerie(e)}
            />
            <label htmlFor="game">ultimo jogo</label>
            <input
              id='game'
              type='text'
              name='jogo'
              value={lastGame}
              onChange={(e) => mudancaDeJogo(e)}
            />
            <label htmlFor="music">ultima musica</label>
            <input
              id='music'
              type='text'
              name='musica'
              value={music}
              onChange={(e) => mudancaDeMusica(e)}
            />
            <label htmlFor="gender">genero</label>
            <input
              id='gender'
              type='text'
              name='genero'
              value={genre}
              onChange={(e) => mudancaDeGenero(e)}
            />
            <label htmlFor="ability">habilidade especial</label>
            <input
              id='ability'
              type='text'
              name='habilidade'
              value={specialSkill}
              onChange={(e) => mudancaDeHabilidade(e)}
            />
            <label htmlFor="power">poder especial</label>
            <input
              id='power'
              type='text'
              name='poder'
              value={specialPower}
              onChange={(e) => mudancaDePoder(e)}
            />
            <label htmlFor="team">time favorito</label>
            <input
              id='team'
              type='text'
              name='team'
              value={favoriteTeam}
              onChange={(e) => mudancaDeTime(e)}
            />
            <label htmlFor="verse">verso favorito da biblia</label>
            <input
              id='verse'
              type='text'
              name='versoBiblia'
              value={bibleVerse}
              onChange={(e) => mudancaDeVerso(e)}
            />
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
            <button type='submit'>Enviar informações</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default App
