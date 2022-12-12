import React, { Component } from 'react'
import './style.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/index.js';
import PersonalPage from './new/page/mainPage/index.js';
import SearchPage from './new/page/searchpage/index.js';
import AllPage from './new/page/allPage';
import PageNotFound from './error/404'
import Unauthorized from './error/401'
import Forbidden from './error/403'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/personal/:searchName' element={<PersonalPage />}></Route>
            <Route path='/search' element={<SearchPage />}></Route>
            <Route path='/allpage' element={<AllPage />}></Route>
            <Route path='/*' element={<PageNotFound />}></Route>
            <Route path='/401' element={<Unauthorized />}></Route>
            <Route path='/403' element={<Forbidden />}></Route>
          </Routes>
        </HashRouter>

      </div>
    );
  }
}

export default App
