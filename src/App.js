import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import About from './component/About'; 
import Textform from './component/Textform';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,

} from "react-router-dom"; 
function App() {
  const [mode,setMode] = useState('light');
  const [text, setText] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  
  const toggleMode = () => {
    
    if (mode=='light') {
      setMode('dark');
      
      setText('Enable light mode');
      document.body.style.backgroundColor = "#364f5c";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
     
      setInterval(() => {

      document.title = "textutils dark mode";
      }, 1000);
    }

    else {
      setMode('light'); 
      setText('Enable dark mode'); 
      document.body.style.backgroundColor = "white"; 
      document.body.style.color = "black";
      showAlert("light mode has been enabled", "success");
      document.title = "textutils light mode";
    }
  }
  return (
    <>
       <Router>  

        <Navbar title="Textutil" aboutText="about" mode={mode}  text={text} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Routes>     
            <Route  exact path="/about" element={    

               <About title="About Us" mode={mode}  />   }    
             > 

              </Route>    

              <Route exact path="/" element={   

              <Textform heading="Try TextUtils - word counter, character counter, remove extra spaces"  mode={mode} showAlert={showAlert} />
              }>    

            </Route>   
          </Routes>   

        </div>
      </Router>   

    </>

  );
}

export default App;
