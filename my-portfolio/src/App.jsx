import './App.css';
import Header from './Header/Header.jsx';
import Main from './Pages/Main.jsx';
import About from './Pages/AboutMe.jsx';
import Projects from './Pages/Projects.jsx';
import { Route, Routes } from 'react-router-dom';

const navLinks = ['Home', 'AboutMe', 'Projects', 'Contact']

function App() {
  return (
    <>
      <Header name={navLinks}/>
      <br /><br /><br />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='home/' element={<Main/>}/>
        <Route path='aboutme/' element={<About/>}/>
        <Route path='projects/' element={<Projects/>}/>
      </Routes>
    </>
  )
}

export default App
