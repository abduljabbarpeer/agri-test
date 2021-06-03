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
      <hr />
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/DfQmliAmM7U'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
