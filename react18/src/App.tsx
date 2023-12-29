import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { qiankunWindow } from "vite-plugin-qiankun/es/helper";
import Home from './view/home'

function App() {
  return (
    <>
      <BrowserRouter basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? '/qiankun' : '/'}>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
