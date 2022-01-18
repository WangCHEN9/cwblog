import React from 'react';
import SocialMedia from './SocialMedia';
//@ts-ignore
import Typical from 'react-typical';

const Profile = () => {
  return (
    <div className="container mx-lg px-10 md:mx-auto">
      <SocialMedia />
      <h3>
        <p className="flex text-lg text-white font-semibold justify-center py-2">
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
        className="text-5xl font-semibold text-white flex justify-center py-2"
      />
      <p className="text-lg text-white flex justify-center py-2">
        Freelance developer with mechanical engineering background.
      </p>
      <div className="mt-4  flex justify-center gap-10">
        <button
          type="button"
          className="inline-block items-center transition duration-300 ease border-2 border-black hover:border-orange-400 text-base font-medium rounded-full text-black px-8 py-3 cursor-pointer"
        >
          Hire Me
        </button>
        <button
          type="button"
          className="inline-block items-center transition duration-500 ease hover:bg-indigo-900 bg-orange-400 text-base font-medium rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Get Resume
        </button>
      </div>
    </div>
  );
};

export default Profile;
