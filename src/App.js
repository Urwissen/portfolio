import React from "react";
import './App.css';
import {Header} from './components/Header.js';
import {Main} from './components/Main.js';
import {Footer} from './components/Footer.js';
import Confetti from 'react-confetti'


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

  const width = document.width
  const height = document.height
  return (
    <div className="App">
      {darkMode === "rainbow" ? <Confetti width={width} height={height} style={{zIndex: 101}} /> : null}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
}
export default App;
