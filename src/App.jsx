import './App.css';
import { MainPage } from './components/MainPage';
//import styled from 'styled-components';
import { EventPage } from './components/EventPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path="/" index />
        <Route element={<EventPage />} path="/events" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
