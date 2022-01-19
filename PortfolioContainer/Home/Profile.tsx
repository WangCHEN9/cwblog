import React from 'react';
import SocialMedia from './SocialMedia';
//@ts-ignore
import Typical from 'react-typical';
import Image from 'next/image';

function Intro() {
  return (
    <div className="">
      <SocialMedia />
      <h3>
        <p className="flex text-2xl text-white font-semibold justify-center py-2 font-sans">
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
        className="text-5xl font-light text-white flex justify-center py-2 font-mono "
      />
      <p className="text-lg text-white flex justify-center py-2">
        Freelance developer with mechanical engineering background
      </p>
      <div className="mt-4  flex justify-center gap-10">
        <button
          type="button"
          className="inline-block items-center transition duration-300 ease border-2 border-white hover:border-orange-400 hover:text-orange-400 text-base font-medium rounded-full text-white px-8 py-3 cursor-pointer"
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
  );
}

function Profile() {
  return (
    <div className="grid grid-cols-3 py-6 bg-[#062d4e]">
      <div className="col-span-2 ...">
        <Intro />
      </div>
      <div className="...">
        <Image
          unoptimized
          alt={'Hero Image'}
          height={300}
          width={300}
          className="align-middle drop-shadow-lg rounded-lg object-cover relative"
          src="wangchen.jpg"
        />
      </div>
    </div>
  );
}

export default Profile;
