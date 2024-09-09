import './App.css';
import { useState } from 'react';

function App() {

  const [nome, setNome] = useState('Thiago');

  return (
    <>
        <h1>{nome}</h1>
    </>
  );
}

export default App;
