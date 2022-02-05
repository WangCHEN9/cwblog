import React from 'react';
import SocialMedia from './SocialMedia';
//@ts-ignore
import Typical from 'react-typical';
import Image from 'next/image';
import { ScrollButton } from '../../components';

function Intro() {
  return (
    <div className="flex flex-col mt-1">
      <SocialMedia />
      <h3>
        <p className="flex text-2xl text-white font-semibold justify-center mb-6 font-sans">
          Hello, I am <span className="text-lg pr-2"></span>
          <span className="text-orange-400">Wang CHEN</span>
        </p>
      </h3>
      <Typical
        steps={[
          'Data Scientist 🚘',
          1500,
          'Innovation Engineer 🛠️',
          1500,
          'Full Stake Developer 💻',
          1500,
        ]}
        loop={Infinity}
        className="text-5xl font-light text-white flex justify-center py-4 px-4 font-mono "
      />
      <p className="text-lg text-white flex justify-center py-4 mx-4">
        Data scientist {'&'} Full stack web developer with mechanical
        engineering background
      </p>
      <div className="mt-4  flex justify-center gap-10">
        <ScrollButton />
        <button
          type="button"
          className="inline-block items-center transition duration-500 ease hover:scale-110 bg-orange-400 text-base font-medium rounded-full text-white px-5 py-3 cursor-pointer"
        >
          {' '}
          <a href="/Wang_CHEN-CV-2022-02.pdf" download>
            Get Resume
          </a>
        </button>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 grid-rows-1 pb-6">
        <div className="col-span-3 md:col-span-2 pt-10 pb-4">
          <Intro />
        </div>
        <div className="rounded-full border-b-2 p-4 drop-shadow-lg invisible md:visible ml-8 mb-2 mt-8">
          <Image
            alt={'Hero Image'}
            className="drop-shadow-lg  rounded-full shadow-sm shadow-white object-cover relative"
            src="/wangchen.jpg"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
