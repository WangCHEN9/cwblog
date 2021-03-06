import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

// @ts-ignore
library.add(fab);

const SocialMedia = () => {
  return (
    <div className="flex justify-center pt-2 mb-2">
      <div className="grid grid-cols-3 grid-rows-1 gap-1 w-20 ">
        <Link href="https://www.linkedin.com/in/wangchen9/" passHref>
          <div>
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              className="cursor-pointer transition duration-200 hover:scale-125 invert-[.9] hover:invert-1"
            />
          </div>
        </Link>
        <Link href="https://github.com/WangCHEN9" passHref>
          <div>
            <FontAwesomeIcon
              icon={['fab', 'github-square']}
              className="cursor-pointer transition duration-200 hover:scale-125 invert-[.9] hover:invert-1"
            />
          </div>
        </Link>
        <Link href="https://www.instagram.com/wang.chen9/" passHref>
          <div>
            <FontAwesomeIcon
              icon={['fab', 'instagram-square']}
              className="cursor-pointer transition duration-200 hover:scale-125 invert-[.9] hover:invert-1"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
