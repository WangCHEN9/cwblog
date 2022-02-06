import React, { useState, useRef } from 'react';
import load1 from 'load2.gif';
import { ScreenHeading } from '../../components';
import { SocialMedia } from '../../PortfolioContainer';
//@ts-ignore
import Typical from 'react-typical';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import emailjs from '@emailjs/browser';
// @ts-ignore
library.add(fab);

const ContactMe = (props: any) => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function sendEmail(e: any) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_92d02hj',
        'template_tl1zudo',
        e.target,
        'user_fScjbFNrUvS0r6snl1UtE'
      )
      .then(
        (result) => {
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div>
      <div className="flex justify-center">
        <div className="h-fit" id={props.id}>
          <ScreenHeading
            subHeading={'Lets Keep In Touch'}
            title={'Contact Me'}
          ></ScreenHeading>
          <div className="flex flex-col max-w-scree-lg mx-20 rounded-3xl bg-[#1f2235] px-2 pb-4">
            <div className="grid grid-cols-2 gird-rows-1">
              <div className="mx-6 mt-5">
                <Typical
                  steps={['Get In Touch 📧 ', 1500]}
                  loop={Infinity}
                  className="text-4xl text-white flex py-4 px-4  tracking-wider font-semibold mb-10 "
                />
              </div>
              <div className="flex justify-center mt-10">
                {showSuccessMessage && (
                  <span className=" text-lg font-semibold  text-green-500">
                    Thanks for your message ,<br></br>I will get back to you
                    soon !
                  </span>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="w-6/12 justify-start mx-8">
                <div className="w-6/12 md:w-2/12 justify-start mb-10">
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
                <form
                  className="flex flex-col mx-5"
                  //@ts-ignore
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <label
                    htmlFor="name"
                    className="text-lg font-medium py-1 text-black"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
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
                    name="email"
                    className="rounded-md  border-2 w-full bg-gray-300 focus:bg-white focus:border-[#1f2235] transition duration-300 px-2 py-2"
                  />
                  <label
                    htmlFor="message"
                    className="text-lg font-medium py-1 text-black"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="rounded-md  border-2 w-full bg-gray-300 focus:bg-white focus:border-[#1f2235] transition duration-300 px-2 py-2"
                  />
                  <div className="my-4 flex">
                    <input
                      type="submit"
                      value="Send"
                      className="justify-center transition duration-500 ease hover:bg-indigo-900 inline-block bg-orange-400 text-lg font-medium rounded-md text-white px-8 py-3 cursor-pointer"
                    ></input>
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
