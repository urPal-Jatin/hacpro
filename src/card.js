import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './App.css'; // Assuming you have a CSS file for styling

function App() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);

  const handleFlipClick1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleFlipClick2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  const handleFlipClick3 = () => {
    setIsFlipped3(!isFlipped3);
  };

  const handleFlipClick4 = () => {
    setIsFlipped4(!isFlipped4);
  };

  return (
    <div className="card-container">
      <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
        <div className="card">
          <h1>This is the front of card 1.</h1>
          <button onClick={handleFlipClick1}>Click to flip</button>
        </div>

        <div className="card">
          <h1>This is the back of card 1.</h1>
          <button onClick={handleFlipClick1}>Click to flip back</button>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
        <div className="card">
          <h1>This is the front of card 2.</h1>
          <button onClick={handleFlipClick2}>Click to flip</button>
        </div>

        <div className="card">
          <h1>This is the back of card 2.</h1>
          <button onClick={handleFlipClick2}>Click to flip back</button>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
        <div className="card">
          <h1>This is the front of card 3.</h1>
          <button onClick={handleFlipClick3}>Click to flip</button>
        </div>

        <div className="card">
          <h1>This is the back of card 3.</h1>
          <button onClick={handleFlipClick3}>Click to flip back</button>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
        <div className="card">
          <h1>This is the front of card 4.</h1>
          <button onClick={handleFlipClick4}>Click to flip</button>
        </div>

        <div className="card">
          <h1>This is the back of card 4.</h1>
          <button onClick={handleFlipClick4}>Click to flip back</button>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default App;
