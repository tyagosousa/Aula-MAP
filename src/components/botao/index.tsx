import './App.css'
import { useState } from 'react'

function App() {

  const [nome, setNome] = useState('Thiago');

  return (
    <>
        <h5>{nome}</h5>
        

    </>
  )
}

export default App