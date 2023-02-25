import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";
import Home from "./components/Home"; 
import NewTodo from "./components/NewTodo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index path="/" element={<SignIn />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/NewTodo" element={<NewTodo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
