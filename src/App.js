import React from 'react';
import './App.css';




function App() {

  function scrollToSection() {
    // Get the element you want to scroll to
    const section = document.getElementById('section-id');

    // Scroll smoothly to the section
    section.scrollIntoView({ behavior: 'smooth' });
  }
  return (

    
<div className="App">
  <header className="App-header">
    <nav className="Header-nav">
      <img className="Header-logo" src="https://i.imgur.com/uQd1fVl.png" alt="Logo" />
      <ul className="Header-list">
        
      </ul>
    </nav>
    <div className="App-container">
      <div className="App-text">
        <h1 className="gradient-text">ADHD Tracking. Done Simply.</h1>
        <p className='App-description'>Gamified ADHD quantitative testing. Sign up to be notified when we launch. </p>
        <a href='#info-section' onClick={scrollToSection} ><button className="Hero-button">Learn More</button></a>
        <a href=''><button className="Hero-button2">Sign Up</button></a>
      </div>
      <div className="App-image-div">
        <img className='App-image' src='https://i.imgur.com/s1k6qvE.png' alt='Demo' />
      </div>
    </div>
  </header>

      <main>

      <div className='info-container' id='info-section'>
        <div class="info">
          <div className='section-image-div'>
            <img src="https://i.imgur.com/qyZPD16.png" alt="Card Image" class="section-image"></img>
          </div>
          <div className='section-text'>
            <h2 class="section-header">Stop waiting for traditional health services.</h2>
            <p class="section-text">Parents and children with ADHD have been waiting too long for diagnoses, and when they are diagnosed, the likelihood of misdiagnoses is too high. Traditional health services, particularly in the UK see ADHD diagnoses as non life-threatening and therefore don't prioritise diagnoses, leading weeks, months and years of delays. </p>
          </div>
          
        </div>
      </div>

      <div className='info-container'>
        <div class="info">
        <div className='section-text'>
            <h2 class="section-header">Make regular testing fun, with gamified testing.</h2>
            <p class="section-text">Our unique games have been tested alongside professional clinicians and children diagnosed with ADHD. A fun, interactive set of games with clear progression means that children won't shy away from repeatedly engaging with our quantititative testing methods. </p>
          </div>
          <div className='section-image-div'>
            <img src="https://i.imgur.com/sWeBSXy.png" alt="Card Image" class="section-image"></img>
          </div>
        </div>
      </div>











        


      </main>
    </div>
    
  );
}

export default App;
