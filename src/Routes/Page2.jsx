import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Page2 = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>SECOND PAGE</title>
        <meta name='description' content='SECOND PAGE OF APP' />
      </Helmet>
      <h1>PAGE 2</h1>
      <hr />
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/EEa-bJorKZE'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
      <hr />
      <img
        id='image-4-page_2'
        src='https://picsum.photos/300'
        alt='random'
        class='img'
      />
      <hr />
      <button
        id='another_sample_btn'
        className='btn'
        onClick={() => setCount(count + 1)}
      >
        ANOTHER SAMPLE BUTTON
      </button>
    </>
  );
};

export default Page2;
