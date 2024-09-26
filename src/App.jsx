import { useState } from 'react'

import Perfil from './components/Perfil'
import ReposList from './components/ReposList'

function App() {
  const [formVisib, setFormVis] = useState(true)
  const [nomeUsuario, setName] = useState('')
  
  return (
    <>
      <input type="text" onBlur={(e) => setName(e.target.value)} />
      
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
    </>
  )
}

export default App
