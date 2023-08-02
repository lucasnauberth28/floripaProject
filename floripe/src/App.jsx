import logo from './assets/logo-tiki.svg';
import { Box } from './components/Box';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <body className="body">
        <img src={logo} className="logo" alt="logotipo da Tiki"/>
        <Box />
       
      </body>
    </div>
  );
}

export default App;
