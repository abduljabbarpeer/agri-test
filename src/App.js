import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <h1>{count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        INCREMENT
      </button>
    </div>
  );
}

export default App;
