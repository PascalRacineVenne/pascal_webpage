import React from 'react';
import Headshot from './headshot';
import './about_me.css';

const AboutMe = () => {
  return (
    <section id='about' className='about__StyledAbout section'>
      <h5 className='numbered-heading'>About me</h5>
      <div className='inner_about_me'>
        <div className='about__StyledText'>
          <p>
            As a recent graduate of{' '}
            <a
              href='https://www.lewagon.com/'
              className='link_wagon'
              alt='Le Wagon'
              target='_blank'
              rel='noreferrer'
            >
              Le Wagon
            </a>{' '}
            full stack coding bootcamp, my main focus these days is{' '}
            <strong>
              building or reproducing accessible and inclusive digital products
            </strong>{' '}
            while gaining experience in mastering these new concepts and
            bringing it to the next level.
          </p>
          <p>
            I've been a musician for 20 years and I've always been very
            enthusiastic about the possible relations between music and
            technology. For me code seems to be another way to{' '}
            <strong>shape and create dynamic material</strong> based on the
            interaction and harmony between languages. Pretty much like music!
          </p>
        </div>
        <div>
          <Headshot />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
