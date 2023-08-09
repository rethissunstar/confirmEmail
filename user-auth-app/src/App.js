import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; 
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to our User Authentication System</h1>
        <Link to="/login">Login</Link>
        <Link to="/create">Create Account</Link>
      </div>
      <Routes> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/create" element={<CreateAccount />} /> 
      </Routes>
    </Router>
  );
};

export default App;
