import './App.css'
import Header from './Header/Header.jsx'

const navLinks = ['Home', 'About', 'Projects', 'Contact']

function App() {

  return (
    <>
      <Header name={navLinks}/>
    </>
  )
}

export default App
