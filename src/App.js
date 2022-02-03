import './App.css';
import React from 'react';
import Table from './components/table';
import { Routes, Route } from 'react-router-dom'
import Details from './components/details';
function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path='' element={<Table/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
      </div>
  );
}

export default App;
