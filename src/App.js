import React from "react";
import './App.css';
import {Header} from './components/Header.js';
import {Main} from './components/Main.js';
import {Footer} from './components/Footer.js';

function App() {
  const preferDarkQuery = '(prefers-color-scheme: dark)'
  const [darkMode, setDarkMode] = React.useState("")
  const [round, setRound] = React.useState(0)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    setDarkMode(mediaQuery.matches ? "dark" : "")
  }, [])

  
  function toggleDarkMode() {
      if (!darkMode) {
          setDarkMode(prev => "dark")    
      } else if (darkMode === "dark" && !round) {
          setDarkMode(prev => "rainbow")
          setRound(1)
      } else if (darkMode === "rainbow") {
          setDarkMode(prev => "dark")
      } else if (darkMode === "dark" && round){
          setDarkMode(prev => "")
          setRound(0) 
      }
          
  }

  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
}
export default App;
