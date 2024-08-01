import './App.css';
import Header from './Header/Header.jsx';
import Main from './Pages/Main.jsx';
import About from './Pages/AboutMe.jsx';
import { Route, Routes } from 'react-router-dom';

const navLinks = ['Home', 'AboutMe', 'Skills', 'Projects', 'Contact']

function App() {

  return (
    <>
      <Header name={navLinks}/>
      <br /><br /><br />
      <Routes>
        <Route path='home/' element={<Main/>}/>
        <Route path='aboutme/' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
