import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotesList from './pages/NotesList';
import MyNote from './pages/MyNote';

function App() {
  return (
    <div className='container dark'>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<NotesList />} />
            <Route path='/my_note/:id' element={<MyNote />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
