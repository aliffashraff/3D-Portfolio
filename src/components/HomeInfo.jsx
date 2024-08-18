import React from 'react';
import { Link } from 'react-router-dom';

import { arrow } from '../assets/icons';
import Socials from './Socials';

// the things that only changes in each section
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

// objects for currentStage in the island
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Aliff Ashraff</span> 👋
      <br />A Software Developer from Selangor, Malaysia
      <br />
      <br />
      Let's stay connected!
      <Socials />
    </h1>
  ),
  2: (
    <InfoBox
      text={
        'Acquired a broad range of skills over time and gained valuable experience across various companies.'
      }
      link={'/about'}
      btnText={'Explore further'}
    />
  ),
  3: (
    <InfoBox
      text={
        "Want a closer look about what I've built and worked on? Explore my projects and see what I've accomplished!"
      }
      link={'/projects'}
      btnText={'Visit my projects'}
    />
  ),
  4: (
    <InfoBox
      text={
        'Need a project done or looking for a dev? I am just a few keystrokes away!'
      }
      link={'/contact'}
      btnText={"Let's talk"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
