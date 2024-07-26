import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Main from './components/Main/Main.jsx';

function App() {
  return(
    <>
      <Header isLoggedIn={true} name="Amir"/>
      <Main/>
      <br />
      <Footer/>
    </>
  )
}

export default App
