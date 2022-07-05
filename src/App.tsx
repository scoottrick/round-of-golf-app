import React from 'react';
import './App.scss';

function App() {
  const heyClicked = () => console.log('hey');

  return (
    <div className="App">
      <h1 className="uk-text-lead">Hey</h1>
      <button
        className="uk-button uk-button-default"
        onClick={() => heyClicked()}
      >
        Hey
      </button>
    </div>
  );
}
export default App;
