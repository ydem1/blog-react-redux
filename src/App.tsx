import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/log" element={<div>log</div>} />
      </Routes>
    </div>
  );
};
