import React, { Component ,Fragment} from 'react'
import './style.css'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Login from './pages/login/index.js';
import MainPage from './pages/main/index.js';
import MainPage2 from './pages/main2/index.js';
import Home from './testPanel/Home.js';
import NewMainPage from './new/page/mainPage/index.js';
class App extends Component {
  render() {
    return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/main' element={<MainPage/>}></Route>
            <Route path='/main2' element={<MainPage2/>}></Route>
            <Route path='/main3' element={<Home/>}></Route>
            <Route path='/newMain' element={<NewMainPage/>}></Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}
}

export default App
