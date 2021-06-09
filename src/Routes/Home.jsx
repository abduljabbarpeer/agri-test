import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>HOME PAGE</title>
        <meta
          name='description'
          content='HOME PAGE OF APP'
        />
      </Helmet>
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
        id='image-1'
        src='https://picsum.photos/250/300'
        alt='random-1'
        class='img'
      />
      <hr />
      <img
        id='image-2'
        src='https://picsum.photos/300'
        alt='random-2'
        class='img'
      />
    </>
  );
};

export default Home;
