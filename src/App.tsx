// src/App.tsx
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
/* import SchedulerPage from "./pages/SchedulerPage";
import ResultPage from "./pages/ResultPage"; */
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
  )

}

export default App
