import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success")
      document.title = "Text Utils - Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been disabled", "success")
      document.title = "Text Utils - Light Mode"
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container'>
          <div>
          <TextForm heading="Enter Text To Analyze" mode={mode} showAlert={showAlert} />
            {/* <Routes> */}
              {/* <Route path="/about" element={<About/>}/> */}
              {/* <Route path="/"element={<TextForm heading="Enter Text To Analyze" mode={mode} showAlert={showAlert} />} /> */}
            {/* </Routes> */}
          </div>
      </div>
      {/* </Router> */}
      </>
  );
}
export default App;