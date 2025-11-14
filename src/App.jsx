import { useState, useEffect, use } from 'react'
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
  const [isUser, setIsUser] = useState(true)
  
  const onSubmitform = () => {
    const body = {
      // chave: valor,
      name,
      age,
      phone,
      instagram,
      github,
      thought,
      problem,
      lastSeries,
      lastGame,
      music,
      genre,
      specialSkill,
      specialPower,
      favoriteTeam,
      bibleVerse,
      email,
      password
    }
    fetch('https://www.api.alanleiser.com/', {
      method: "POST",
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
        if (err.status === 400) {
          setIsUser(true)
        }
      })
  }

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

  // const enviarForms = (e) => {
  //   e.preventDefault()
  //     fetch('https://www.api.alanleiser.com/', {
  //     method: 'POST',
  //     body: JSON.stringify()
  //   })
  // }
  // console.log(`
  // Nome: ${name},
  // Idade: ${age},
  // Telefone: ${phone},
  // Instagram: ${instagram},
  // Github: ${github},
  // Pensamento: ${thought},
  // Problema: ${problem},
  // Última série: ${lastSeries},
  // Último jogo: ${lastGame},
  // Música: ${music},
  // Gênero musical: ${genre},
  // Habilidade Especial: ${specialSkill},
  // Poder especial: ${specialPower},
  // Time favorito: ${favoriteTeam},
  // Verso da Bíblia: ${bibleVerse},
  // Email: ${email},
  // Senha: ${password}
  // `)

  // useEffect(() => {
  //   fetch('https://www.api.alanleiser.com/')
  //     .then(response => response.json())
  //     .then(get => console.log(get))
  // })

  return (
    <>
      <div className="container">
        <h2>Cadasatro de Usuário</h2>
        <form onSubmit={onSubmitform}>

          <div className='nome'>
            <label htmlFor="name">nome</label>
            <input
              id='name'
              type='text'
              name='nome'
              value={name}
              onChange={(e) => mudancaDeNome(e)}
            />
          </div>

          <div className="idade">
            <label htmlFor="age">idade</label>
            <input
              id='age'
              type='number'
              name='idade'
              value={age}
              onChange={(e) => mudancaDeIdade(e)}
            />
          </div>

          <div className="cell">
            <label htmlFor="telephone">telefone</label>
            <input
              id='telephone'
              type='number'
              name='telefone'
              value={phone}
              onChange={(e) => mudancaDeTelefone(e)}
            />
          </div>

          <div className="insta">
            <label htmlFor="instagram">instagram</label>
            <input
              id='instagram'
              type='text'
              name='instagram'
              value={instagram}
              onChange={(e) => mudancaDePerfil(e)}
            />
          </div>

          <div className="github">
            <label htmlFor="github">github</label>
            <input
              id='github'
              type='text'
              name='github'
              value={github}
              onChange={(e) => mudancaDeUsuario(e)}
            />
          </div>

          <div className="pensamento">
            <label htmlFor="thought">pensamento</label>
            <input
              id='thought'
              type='text'
              name='pensamento'
              value={thought}
              onChange={(e) => mudancaDePensamento(e)}
            />
          </div>

          <div className="problema">
            <label htmlFor="problem">problema</label>
            <input
              id='problem'
              type='text'
              name='problema'
              value={problem}
              onChange={(e) => mudancaDeProblema(e)}
            />
          </div>

          <div className="serie">
            <label htmlFor="serie">ultima serie</label>
            <input
              id='serie'
              type='text'
              name='serie'
              value={lastSeries}
              onChange={(e) => mudancaDeSerie(e)}
            />
          </div>

          <div className="jogo">
            <label htmlFor="game">ultimo jogo</label>
            <input
              id='game'
              type='text'
              name='jogo'
              value={lastGame}
              onChange={(e) => mudancaDeJogo(e)}
            />
          </div>

          <div className="musica">
            <label htmlFor="music">ultima musica</label>
            <input
              id='music'
              type='text'
              name='musica'
              value={music}
              onChange={(e) => mudancaDeMusica(e)}
            />
          </div>

          <div className="genero">
            <label htmlFor="gender">genero</label>
            <input
              id='gender'
              type='text'
              name='genero'
              value={genre}
              onChange={(e) => mudancaDeGenero(e)}
            />
          </div>

          <div className="habilidade">
            <label htmlFor="ability">habilidade especial</label>
            <input
              id='ability'
              type='text'
              name='habilidade'
              value={specialSkill}
              onChange={(e) => mudancaDeHabilidade(e)}
            />
          </div>

          <div className="poder">
            <label htmlFor="power">poder especial</label>
            <input
              id='power'
              type='text'
              name='poder'
              value={specialPower}
              onChange={(e) => mudancaDePoder(e)}
            />
          </div>

          <div className="time">
            <label htmlFor="team">time favorito</label>
            <input
              id='team'
              type='text'
              name='team'
              value={favoriteTeam}
              onChange={(e) => mudancaDeTime(e)}
            />
          </div>

          <label htmlFor="verse">verso favorito da biblia</label>
          <input
            id='verse'
            type='text'
            name='versoBiblia'
            value={bibleVerse}
            onChange={(e) => mudancaDeVerso(e)}
          />

          <div className="email">
            <label htmlFor="email">email</label>
            <input
              id='email'
              type='email'
              name='email'
              value={email}
              onChange={(e) => mudancaDeEmail(e)}
            />
          </div>

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
    </>
  )
}

export default App
