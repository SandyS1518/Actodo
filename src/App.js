import React from 'react';
import './index.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Landing from './Pages/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';


function App(){


  const [Users, SetUsers] = useState([{
    username: "Sandy",
    password: "2002",

}])


  return(
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login Users={Users} SetUsers={SetUsers}></Login>}></Route>
        <Route path='/Signup' element={<Signup Users={Users} SetUsers={SetUsers}></Signup>}></Route>
        <Route path='/Landingpage' element={<Landing></Landing>}></Route>

      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
