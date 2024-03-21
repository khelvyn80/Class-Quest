import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import LogIn from './pages/logons/login';
import Logon from './pages/logons/logon';
import UserPage from './pages/userpage/UserPage';
import AdminPage from './pages/adminpage/AdminPage';
const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/logon' element={<Logon/>} />
          <Route path='/userpage' element={<UserPage/>} />
          <Route path='/adminpage' element={<AdminPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

