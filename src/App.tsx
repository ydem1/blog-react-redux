import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './common/components/header/header.components';
import { Home } from './pages/home/home.page';
import { Login } from './pages/login/login.page';
import { SingUp } from './pages/sing-up/sing-up.page';
import { UserPage } from './pages/user/user.apge';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </div>
  );
};
