import logo from './assets/logo-tiki.svg';
import icon from './assets/icon-yellow.svg';
import spoilers from './assets/tittle1.svg';
import arrowDown from './assets/arrow-down.svg';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <body className="body">
        <img src={logo} className="logo" alt="logotipo da Tiki"/>

        <div className='background-box'>
          <h1 className='title'>CUIDADO, AO ROLAR PODE CONTER...</h1>
          <img src={icon} className='icon' alt="Ícone de expectativa"/>
          <img src={spoilers} className='spoilersText' alt="Spoilers"/>
          <img src={arrowDown} className='arrowDown' alt='Seta para baixo'/>
        </div>
       
      </body>
    </div>
  );
}

export default App;
