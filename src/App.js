import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBook from './Components/AddBook';
import BookSearch from './Components/BookSearch';


import Nave from './Components/Nave';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewBooks from './Components/ViewBooks';



function App() {
  return (
    <div>
      
    
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={< AddBook />}/>
        <Route path='/search' exact element={< BookSearch />}/>
        <Route path='/view' exact element={< ViewBooks />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
