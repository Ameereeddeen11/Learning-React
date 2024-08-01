import './App.css';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import { Route, Routes } from 'react-router-dom';
import About from './Main/About/AboutMe.jsx'

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

function App() {

  return (
    <>
      <Header name={navLinks}/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/aboutme' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
