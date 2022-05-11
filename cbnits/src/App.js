import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Studio from './Pages/Studio/Studio'
import Dedicated from './Pages/DedicatedHiring/Dedicated'
import Insights from './Pages/Insights & News/Insights'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/studio' element={<Studio/>}/>
          <Route path='/dedicated' element={<Dedicated/>}/>
          <Route path='/insights' element={<Insights/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
