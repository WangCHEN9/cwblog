import React, { FC } from 'react';

interface Props {
  title: string;
  subHeading: string;
}

const ScreenHeading: FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-center w-full my-10">
      <div className="text-4xl font-black text-[#1f2235] font-sans">
        <span>{props.title}</span>
      </div>
      {props.subHeading ? (
        <div className="tracking-widest my-2 text-md text-black">
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex relative w-2/12 h-4">
        <div className="w-5/12 h-1 bg-[#1f2235]  self-center" />
        <div className="w-2/12 border-orange-400 border-4 bg-orange-400 rounded-full justify-self-center" />
        <div className="w-5/12 h-1 bg-[#1f2235]  self-center" />
      </div>
    </div>
  );
};

export default ScreenHeading;
