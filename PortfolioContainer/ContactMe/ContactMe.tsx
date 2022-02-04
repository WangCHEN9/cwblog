import React, { useState } from 'react';
import load1 from 'load2.gif';
import { ScreenHeading } from '../../components';
import { SocialMedia } from '../../PortfolioContainer';
//@ts-ignore
import Typical from 'react-typical';
import Image from 'next/image';

const ContactMe = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [banner, setBanner] = useState('');
  const [bool, setBool] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  return (
    <div className="min-h-screen" id={props.id}>
      <ScreenHeading
        subHeading={'Lets Keep In Touch'}
        title={'Contact Me'}
      ></ScreenHeading>
      <div className="flex flex-col max-w-scree-lg mx-20 rounded-3xl bg-[#1f2235] ">
        <div className="mx-6 mt-5">
          <Typical
            steps={['Get In Touch 📧 ', 1500]}
            loop={Infinity}
            className="text-4xl text-white flex py-4 px-4  tracking-wider font-semibold mb-10 "
          />
        </div>
        <div className="flex">
          <div className="w-6/12 justify-start mx-8">
            <div className="w-2/12 justify-start mb-40">
              <SocialMedia />
            </div>
            <div className="max-w-4xl mb-10">
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
          <div className="flex flex-col w-6/12 justify-end h-full rounded-lg bg-pink-200 mr-5">
            <form className="flex flex-col mx-5">
              <p>{banner}</p>
              <label htmlFor="name" className="text-lg font-medium py-1 ">
                Name
              </label>
              <input
                type="text"
                onChange={handleName}
                value={name}
                className="rounded-md"
              />
              <label htmlFor="email" className="text-lg font-medium py-1">
                Email
              </label>
              <input
                type="email"
                onChange={handleEmail}
                value={email}
                className="rounded-md"
              />
              <label htmlFor="message" className="text-lg font-medium py-1">
                Message
              </label>
              <textarea
                onChange={handleMessage}
                value={message}
                className="rounded-md"
              />
              <div className="send-btn">
                <button type="submit">
                  send<i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
