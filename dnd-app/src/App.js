import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import SkillsPage from './pages/SkillsPage.js';
import EquipmentPage from './pages/EquipmentPage.js';
import ActionsPage from './pages/ActionsPage.js';
import SpellsPage from './pages/SpellsPage.js';
import NavBar from './NavBar.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/skills" component={SkillsPage} />
          <Route path="/equipment" component={EquipmentPage} />
          <Route path="/actions" component={ActionsPage} />
          <Route path="/spells" component={SpellsPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
