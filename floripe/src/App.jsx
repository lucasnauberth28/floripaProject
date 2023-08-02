import logo from './assets/logo-tiki.svg';
import text from './assets/tittle2.svg';
import icon from './assets/icon-yellow.svg';

import { Box } from './components/Box';
import Form from './components/Form';
import { Textnice } from './components/NiceText';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <body className="body">
        <img src={logo} className="logo" alt="logotipo da Tiki"/>
        <Box />
        <img src={text} className="text" alt="Quero fazer parte!"/>
        <img src={icon} className='icon' alt="Ícone de expectativa"/>
        <Form/>
        <Textnice />

      </body>
    </div>
  );
}

export default App;
