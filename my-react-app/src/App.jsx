import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Main from './components/Main/Main.jsx';
import Home from './components/Pages/Home.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return(
    <>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
      </Routes>
      
      <Footer></Footer>
    </>
  )
}

export default App
