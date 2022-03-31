import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quotes from './components/Quotes';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="math_magicians" element={<Home />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Quotes" element={<Quotes />} />
          </Routes>
        </Router>
      </div>

    );
  }
}

export default App;
