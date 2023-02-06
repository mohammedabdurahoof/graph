import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from './main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/graph" element={<Main graph={true} />} />
    </Routes>
  );
}

export default App;
