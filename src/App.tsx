import React from 'react';
import Introduction from './components/Introduction';
import ThreeCards from './components/ThreeCards';
import './styles/app.css';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Introduction />
      <ThreeCards />
    </div>
  );
}

export default App;