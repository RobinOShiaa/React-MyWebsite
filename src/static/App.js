import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Slider from './components/Slider/Slider';
import Info from './components/Info/Info';
import Border from './components/Border/Border';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="App">
      <div class="container">
        <Navigation showContact={showContact} setShowContact={setShowContact} />
        <About />
        <Border title="Projects"/>
        <Slider />
        <Border />
        <Info/>
      </div>
      
      <Contact showContact={showContact} setShowContact={setShowContact} />

   
    </div>
  );
}

export default App;
