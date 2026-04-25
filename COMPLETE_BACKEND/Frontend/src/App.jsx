import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from "./pages/CreatePost";
const App =()=>{
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<CreatePost/>}>    
        </Route>
        <Route path="/about" element={<h1>About Us</h1>}>

        </Route>
      </Routes>

    </Router>
  
  )
}

export default App