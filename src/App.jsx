import { useState } from 'react';

import Perfil from './components/Perfil';
import ReposList from './components/ReposList';

function App() {
  const [formVisib, setFormVis] = useState(true);
  const [nomeUsuario, setName] = useState('');
  
  return (
    <>
      <div className="container">
        <label className='text-nowrap fw-bold fs-5 d-flex lh-lg'>
          Insira o usuário GitHub:
          <input className='form-control m-1' type="text" onBlur={(e) => setName(e.target.value)} />
        </label>
      </div>
      
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
