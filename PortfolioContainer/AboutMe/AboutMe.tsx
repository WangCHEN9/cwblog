import React from 'react';
import { ScreenHeading } from '../../components';
// import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import { subscribeOn } from 'rxjs';

const AboutMe = (props) => {
  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeScreen !== props.id) return;
  //   Animations.animations.fadeInScreen(props.id);
  // };
  // const fadeInSubsciption =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description: [
      'Hi! I’m Wang CHEN. I am working as an automotive R&D Innovation engineer since 2013 (3 years in China, the rest in France). Since 2019, I started to develop myself into new career path as a data scientist. I had master degree in software engineering and have decent progamming experience. I promoted data science mindset to our manufacturing team. And developing AI solutions for manufacturing process optimization and automated quality inspection.',
      'I am an international mindset team player with optimistic、independent、outgoing character, always go for perfection and willing to learn.I understand industry trends and excited with new technology revolutions, motivated to embrace the change.',
      'I hope my experience in both engineering and data science could bridge the gap and create new value spaces.',
    ],
    highlights: {
      bullets: [
        'Innovation engineer',
        'Data Scientist',
        'Cat lover',
        'Chinese, English, French',
        'Full stack web development',
        'Block Chain & Solidity',
      ],
      heading: 'Here are a few hightlights:',
    },
  };
  const renderDescription = () => {
    return SCREEN_CONSTSANTS.description.map((value, i) => (
      <div className="mb-4 " key={i}>
        <span>{value}</span>
      </div>
    ));
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="flex items-center text-md" key={i}>
        <div className="h-3 w-3 mr-3 bg-[#ff5823] rounded-full"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div
      className="flex flex-col justify-center items-center screen-container bg-[#f8f7f1]"
      id={props.id || ''}
    >
      <div className="max-w-screen-lg w-8/12">
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me'} />
        <div className="flex w-full shadow-2xl shadow-[#1f2235]">
          <div className="w-6/12 bg-aboutme bg-cover bg-center"></div>
          <div className="w-6/12 text-justify p-7">
            <span className="text-sm">{renderDescription()}</span>
            <div className="mt-5">
              <div>
                <span className="font-semibold">
                  {SCREEN_CONSTSANTS.highlights.heading}
                </span>
              </div>
              <div className="">{renderHighlight()}</div>
            </div>
            <div className="mt-4  flex justify-center gap-10">
              <button
                type="button"
                className="inline-block items-center transition duration-300 ease border-2 border-sky-600 hover:border-orange-400 hover:text-orange-400 text-base font-medium rounded-full text-sky-600 px-8 py-3 cursor-pointer"
              >
                Hire Me
              </button>
              <button
                type="button"
                className="inline-block items-center transition duration-500 ease hover:invert bg-orange-400 text-base font-medium rounded-full text-white px-8 py-3 cursor-pointer"
              >
                Get Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;