import React from 'react';
import { Button } from 'antd';
import './App.scss';

function App() {
  const heyClicked = () => console.log('hey');

  return (
    <div className="App">
      <Button type="primary" onClick={() => heyClicked()}>
        Hey
      </Button>
    </div>
  );
}

export default App;
