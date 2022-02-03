import React, { useState } from 'react';
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../utilities/commonUtils';
import ScrollService from '../utilities/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Headercw = () => {
  return (
    <div className="bg-[#24263b] pt-5">
      <div className="flex justify-center h-20 align-middle text-white">
        <div className="flex items-center justify-between h-full w-9/12 text-white">
          <div className="md:float-left block">
            <Link href="/" passHref>
              <span className="cursor-pointer font-bold text-5xl text-white transition duration-200 hover:text-pink-600">
                WANG
              </span>
            </Link>
          </div>
          <div className="flex items-center font-semibold cursor-pointer text-xl text-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Headercw;
