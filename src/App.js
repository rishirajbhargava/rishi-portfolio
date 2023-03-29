import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { ScaleLoader } from "react-spinners";
import NotFound from "./components/NotFound";




function App() {

  const [loading , setLoading]= useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1500)
  },[])



  const override = {
    "display": "flex",
    "align-items":"center",
    "justify-content":"center"
    };



  return (
    <Router>
       <Routes>
       <Route path='/' element={
          <div className="App">
            {
            loading ? <div className="loader">
                <ScaleLoader
                color={"#000"}
                loading={loading}
                cssOverride={override}
                height={15}
                width={3}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
                
            </div>
            :<> 
                <Header/>
                <Home/>
                <About/>
                <Projects/>
                <Contact/>
                <Footer/>
          </>
        }
      </div>
       }/>
        <Route path="*" element={
          <NotFound />
        } />
       </Routes>
    </Router>
  );
}

export default App;