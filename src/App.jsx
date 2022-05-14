import './App.css';
import { MainPage } from './components/MainPage';
//import styled from 'styled-components';
import { EventPage } from './components/EventPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} exact />
        <Route path="/events" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
