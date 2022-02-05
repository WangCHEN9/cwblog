import React, { FC } from 'react';
import { ScreenHeading, ScrollButton } from '../../components';
// import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import { subscribeOn } from 'rxjs';

interface Props {
  id: any;
}

const AboutMe: FC<Props> = (props) => {
  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeScreen !== props.id) return;
  //   Animations.animations.fadeInScreen(props.id);
  // };
  // const fadeInSubsciption =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description: [
      'Hi! I’m Wang CHEN , Data Scientist , Innovation engineer and also a full stack web developer. I specialise in connected services and manufacturing process optimization. I have multi country working experience, and speak 3 languages.',
      'I am an international mindset team player with optimistic、independent、outgoing character, always go for perfection and willing to learn.I understand industry trends and excited with new technology revolutions, motivated to embrace the change.',
      'I hope my experience in both engineering and data science could bridge the gap and create new value spaces.',
    ],
    highlights: {
      bullets: [
        '3 years as Data Scientist',
        '6 years as Innovation engineer',
        '3 languages : Chinese, English, French',
        '2 Cats with me',
        'Full stack web developer',
        'Blockchain technology lover',
      ],
      heading: 'Here are a few hightlights:',
    },
  };
  const renderDescription = () => {
    return SCREEN_CONSTSANTS.description.map((value, i) => (
      <div className="mb-4 text-black text-base text-left" key={i}>
        <span>{value}</span>
      </div>
    ));
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="flex items-center text-base my-1" key={i}>
        <div className="h-3 w-3 mr-3 bg-[#ff5823] rounded-full"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div>
      <div className="pb-5  bg-[#f8f7f1]">
        <div
          className="flex justify-center items-center mb-10"
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
                  {/* <button
                  type="button"
                  className="inline-block items-center transition duration-300 ease border-2 border-sky-600 hover:border-orange-400 hover:text-orange-400 text-base font-medium rounded-full text-sky-600 px-8 py-3 cursor-pointer"
                >
                  Hire Me
                </button> */}
                  <ScrollButton />
                  <button
                    type="button"
                    className="inline-block items-center transition duration-500 ease hover:scale-110 bg-orange-400 text-base font-medium rounded-full text-white px-5 py-3 cursor-pointer"
                  >
                    <a href="/Wang_CHEN-CV-2022-02.pdf" download>
                      Get Resume
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
