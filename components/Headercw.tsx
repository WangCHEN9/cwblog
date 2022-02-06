import React, { useState } from 'react';
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../utilities/commonUtils';
import ScrollService from '../utilities/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Headercw = () => {
  return (
    <div className="container mx-auto px-10 mb-3">
      <div className="border-b w-full inline-block board-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/" passHref>
            <span className="cursor-pointer font-bold tracking-wide text-3xl text-white transition duration-200 hover:text-orange-400">
              Wang
            </span>
          </Link>
        </div>
        <div className="hidden float-left md:contents gap-10">
          <Link key="blog" href={`/blog`} passHref>
            <span className="md:float-right text-2xl mt-2 align-middle text-white ml-4 font-semibold tracking-wide cursor-pointer transition duration-200 hover:text-orange-400">
              Blog
            </span>
          </Link>
          <Link key="home" href={`/`} passHref>
            <span className="md:float-right text-2xl mt-2 align-middle text-white ml-4 font-semibold tracking-wide cursor-pointer transition duration-200 hover:text-orange-400">
              Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Headercw;
