import React from 'react';
import './App.css';



function App() {
  return (

    
<div className="App">
  <header className="App-header">
    <nav className="Header-nav">
      <img className="Header-logo" src="https://i.imgur.com/uQd1fVl.png" alt="Logo" />
      <ul className="Header-list">
        <li><a href="#about">About</a></li>
        <li><a href="#signup">Sign Up</a></li>
      </ul>
    </nav>
    <div className="App-container">
      <div className="App-text">
        <h1 className="gradient-text">ADHD Symptom Tracking Made Easy</h1>
        <p className='App-description'>Track your child's ADHD symptoms through gamified quantitative testing</p>
        <button className="Hero-button">Learn More</button>
      </div>
      <div className="App-image-div">
        <img className='App-image' src='https://i.imgur.com/s1k6qvE.png' alt='Demo' />
      </div>
    </div>
  </header>

      <main>

      <h1 className='cards-header'>Why Clicks</h1>

      <div class="card-container">
      <div class="card">
      <div className="card-image-div">
          <img className='card-image' src='https://i.imgur.com/A0CWjRd.png' alt='Demo' />
        </div>
        <h2>No waiting time</h2>

      </div>
      <div class="card">
      <div className="card-image-div">
          <img className='card-image' src='https://i.imgur.com/sWeBSXy.png' alt='Demo' />
        </div>
        <h2>Gamified quantitative testing</h2>
      </div>
      <div class="card">
      <div className="card-image-div">
          <img className='card-image' src='https://i.imgur.com/oi6tg67.png' alt='Demo' />
        </div>
        <h2>Data-driven in-app analytics</h2>
      </div>
    </div>







        


      </main>
    </div>
    
  );
}

export default App;
