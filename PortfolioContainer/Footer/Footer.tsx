import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="h-fit w-fit">
      <Image
        alt="footer image"
        src="/shape-bg.png"
        height={126}
        width={1920}
        className="object-contain"
      />
    </div>
  );
};

export default Footer;
