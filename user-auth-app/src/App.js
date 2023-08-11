import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login.js";
import CreateAccount from "./components/CreateAccount.js";
import "./App.css"; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>Welcome to our User Authentication System</h1>
        <div className="button-container">
          <Link to="/login" className="app-button">Login</Link>
          <Link to="/create" className="app-button">Create Account</Link>
        </div>
      </div>
      <Routes>
        <Route path="/login" className= "status" element={<Login />} />
        <Route path="/create" className = "status" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
};

export default App;
