import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './common/components/header/header.components';
import { Home } from './pages/home/home.page';
import { Login } from './pages/login/login.page';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
