import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Main from './components/Main/Main.jsx';
import Home from './components/Pages/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Cards from './components/Main/Cards.jsx';

// const routers = createBrowserRouter(
//   createRoutesFromElements(
//       journey.map(item => <Route key={item.id} path={item.link} element={item.element}/>)
//   )
// )

function App() {
  return(
    <>
      <Header/>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='journey/' element={<Main/>}>
          <Route path='card/' element={<Cards/>}/>
        </Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
