import React from 'react';

//Components imports
import Header from '../Header';
import Footer from '../Footer';
import Landing from '../Landing';
//CSS imports
import '../../App.css';
const App = () => {
  return (
    <div className="App">
        <Header/>
        <Landing/>
        <Footer/>
    </div>
  )
}

export default App