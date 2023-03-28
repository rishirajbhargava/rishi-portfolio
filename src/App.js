import React , {useState, useEffect} from "react";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { ScaleLoader } from "react-spinners";




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
  );
}

export default App;