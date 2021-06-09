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
        src='https://www.youtube.com/embed/CH50zuS8DD0'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
      <hr />
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/vwqQPeeVM1s'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
      <hr />
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/ebvtJCu33vM'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
      <hr />
      <img
        name='image-1'
        src='https://picsum.photos/250/300'
        alt='random-1'
        class='img'
      />
      <hr />
      <img
        name='image-2'
        src='https://picsum.photos/300'
        alt='random-2'
        class='img'
      />
    </div>
  );
}

export default App;
