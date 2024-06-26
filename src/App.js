import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import CounterWithHooks from "./components/CounterWithHooks/CounterWithHooks";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import Feedback from './components/Feedback/Feedback';
import Contacts from './components/Contacts/Contacts';
function App() {
  return (
    <Suspense>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/functionComponent" element={<CounterWithHooks />} />
      <Route path="/classComponent" element={<ClassComponent />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
    </Suspense>
  );
}

export default App;
