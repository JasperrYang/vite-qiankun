import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './view/home'
import About from './view/about'
import Qiankun from './view/qiankun'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/qiankun/*" element={<Qiankun />} />
        </Routes>
        
        <div id='container'></div>
        <Link to="/home">home</Link>
        <Link to="/about">about</Link>
        <Link to="/qiankun">qiankun</Link>
      </BrowserRouter>
    </>
  )
}

export default App
