import React, { useState } from 'react';
import load1 from 'load2.gif';
import { ScreenHeading } from '../../components';
import { SocialMedia } from '../../PortfolioContainer';
//@ts-ignore
import Typical from 'react-typical';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// @ts-ignore
library.add(fab);

const ContactMe = (props: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [banner, setBanner] = useState('');
  const [bool, setBool] = useState(false);
  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e: any) => {
    setMessage(e.target.value);
  };
  // console.log(name);
  return (
    <div>
      <div className="flex justify-center">
        <div className="h-fit" id={props.id}>
          <ScreenHeading
            subHeading={'Lets Keep In Touch'}
            title={'Contact Me'}
          ></ScreenHeading>
          <div className="flex flex-col max-w-scree-lg mx-20 rounded-3xl bg-[#1f2235] px-2 pb-4">
            <div className="mx-6 mt-5">
              <Typical
                steps={['Get In Touch 📧 ', 1500]}
                loop={Infinity}
                className="text-4xl text-white flex py-4 px-4  tracking-wider font-semibold mb-10 "
              />
            </div>
            <div className="flex">
              <div className="w-6/12 justify-start mx-8">
                <div className="w-2/12 justify-start mb-10">
                  <SocialMedia />
                </div>
                <div className="max-w-4xl mb-8">
                  <div className="w-full">
                    <h4 className="text-white tracking-wider font-semibold text-2xl opacity-50 mb-2">
                      Send your email here !
                    </h4>
                    <Image
                      src="/mailz.jpeg"
                      alt="loading image..."
                      className="object-contain opacity-50"
                      height={200}
                      width={600}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-6/12 justify-end h-full rounded-xl bg-gray-200 mr-5 mb-5">
                <form className="flex flex-col mx-5">
                  <p className="bg-orange-400 font-serif font-semibold mb-6 justify-center">
                    {/* {banner} */}
                  </p>
                  <label
                    htmlFor="name"
                    className="text-lg font-medium py-1 text-black"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    onChange={handleName}
                    value={name}
                    className="rounded-md  border-2 w-full bg-gray-300 focus:bg-white focus:border-[#1f2235] transition duration-300 px-2 py-2"
                  />
                  <label
                    htmlFor="email"
                    className="text-lg font-medium py-1 text-black"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={handleEmail}
                    value={email}
                    className="rounded-md  border-2 w-full bg-gray-300 focus:bg-white focus:border-[#1f2235] transition duration-300 px-2 py-2"
                  />
                  <label
                    htmlFor="message"
                    className="text-lg font-medium py-1 text-black"
                  >
                    Message
                  </label>
                  <textarea
                    onChange={handleMessage}
                    value={message}
                    className="rounded-md  border-2 w-full bg-gray-300 focus:bg-white focus:border-[#1f2235] transition duration-300 px-2 py-2"
                  />
                  <div className="my-4">
                    <button
                      type="button"
                      className="justify-center transition duration-500 ease hover:bg-indigo-900 inline-block bg-orange-400 text-lg font-medium rounded-md text-white px-8 py-3 cursor-pointer"
                    >
                      <span>Send</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
