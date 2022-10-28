import React, { Component ,Fragment} from 'react'
import './style.css'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Login from './pages/login/index.js';
import PersonalPage from './new/page/mainPage/index.js';
import SearchPage from './new/page/searchpage/index.js';
class App extends Component {
  render() {
    return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/personal/:searchName' element={<PersonalPage/>}></Route>
            <Route path='/search' element={<SearchPage/>}></Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}
}

export default App
