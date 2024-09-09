import './App.css';
import { useState } from 'react';

function App() {

  const [nome, setNome] = useState(' ');
  const [mensagem, setMensagem] = useState(''); 

  const handleNomeChange = (event) => {
    setNome(event.target.value); // Atualiza valor1 com o valor do input
  }

  const handleSubmit = () => {
    setMensagem(`Olá, ${nome}`); // Define a mensagem para exibir
  };


  return (
    <>


        <input 
          type="text" 
          value={nome} 
          onChange={handleNomeChange} 
        />
      
          
      <div><button onClick={handleSubmit}>Enviar</button> </div>
      <div></div>
      <p>{mensagem}</p>

 
      


    </>
  );
}

export default App;
