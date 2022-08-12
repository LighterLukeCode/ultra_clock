import Clock from './Clock';
import './app.css';
import * as React from 'react';

function App() {
  return (
    <section className="clock container">
      <div className="clock__container grid">
        <div className="clock__content grid">
          <Clock />
        </div>
      </div>
    </section>
  );
}

export default App;
