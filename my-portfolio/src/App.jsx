import './App.css';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

function App() {

  return (
    <>
      <Header name={navLinks}/>
      <Main />
    </>
  )
}

export default App
