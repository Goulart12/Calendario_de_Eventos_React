import React from 'react';
import './index.css';
import App from './App'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { EventPage } from './components/EventPage';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} exact />
      <Route path="/events" element={<EventPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)


