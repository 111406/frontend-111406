import React, { Component ,Fragment} from 'react'
import './style.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './pages/login/index.js';
import MainPage from './pages/main/index.js';
class App extends Component {
  render() {
    return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/main' element={<MainPage/>}></Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}
}

export default App
