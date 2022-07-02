import React from 'react';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
//Components imports
import Header from '../Header';
import Footer from '../Footer';
import Landing from '../Landing';
import Login from '../Login';
import Signup from '../Signup';
import Welcome from '../Welcome';
//CSS imports
import '../../App.css';
import ErrorPage from '../ErrorPage';

const App = () => {
  return (
    <div className="App">
        <Header/>
         <Router>
            <Routes>
              <Route path="/" element={<Landing />}/>
              <Route path="/welcome"  element={<Welcome />}/>
              <Route path="/login"  element={<Login />}/>
              <Route path="/signup"  element={<Signup />}/>
              <Route path="/error-page"  element={<ErrorPage />}/>
            </Routes>
         </Router>
        <Footer/>
    </div>
  )
}

export default App