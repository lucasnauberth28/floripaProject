import '../styles/Form.css'
import React, { useState } from 'react';

const Form = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setNome('');
      setEmail('');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className='bgForm'>
        <p>CADASTRE-SE E FIQUE POR DENTRO <br/> DAS NOVIDADES</p>
        <input
            type="text"
            id="nome"
            value={nome}
            placeholder='Nome'
            onChange={(event) => setNome(event.target.value)}
            required
        />
        <input
            type="email"
            id="email"
            value={email}
            placeholder='meuemail@gmail.com'
            onChange={(event) => setEmail(event.target.value)}
            required
        />

        <div className='declaration'>
            <input type="checkbox" name="" id="politica"/>
            <label htmlFor="politica">Declaro que li e aceito a política de privacidade.</label>
        </div>

        <button type="submit" className='button' disabled={enviando}>
            {enviando ? 'Enviando...' : 'Enviar'}
        </button>
    </form>
  );
};

export default Form;