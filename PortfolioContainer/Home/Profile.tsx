import React from 'react';
import SocialMedia from './SocialMedia';
//@ts-ignore
import Typical from 'react-typical';
import Image from 'next/image';

function Intro() {
  return (
    <div className="mt-6">
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
        Freelance developer {'&'} Data scientist with mechanical engineering
        background
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
    <div className="grid grid-cols-3 grid-rows-1 mb-4 bg-[#24263b]">
      <div className="col-span-3 md:col-span-2 pt-10 pb-4">
        <Intro />
      </div>
      <div className="box-content rounded-full border-b-2 p-4 drop-shadow-lg w-4/5 invisible md:visible mb-2 mt-8">
        <Image
          alt={'Hero Image'}
          height={400}
          width={400}
          className="align-middle drop-shadow-lg  rounded-full shadow-sm shadow-white object-cover relative"
          src="/wangchen.jpg"
        />
      </div>
    </div>
  );
}

export default Profile;
