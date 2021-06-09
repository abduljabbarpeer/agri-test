import React from 'react';
import { Helmet } from 'react-helmet';

const Page1 = () => {
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>FIRST PAGE</title>
        <meta name='description' content='FIRST PAGE OF APP' />
      </Helmet>
      <h1>PAGE 1</h1>
      <hr />
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/IPfo1k2JyIg'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
      <hr />
      <img
        id='image-3-page_1'
        src='https://picsum.photos/300'
        alt='random'
        class='img'
      />
    </>
  );
};

export default Page1;
