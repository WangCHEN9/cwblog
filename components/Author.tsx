import React, { FC } from 'react';
import Image from 'next/image';
import { Author } from '../generated/graphql';

interface Props {
  author: Author;
}

const Author: FC<Props> = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-10 relative rounded-lg bg-black bg-opacity-10">
      <div className="overflow-hidden">
        <Image
          alt={author.name}
          unoptimized
          height={100}
          width={100}
          src={author.photo!.url}
          className="align-middle object-center object-cover overflow-hidden rounded-full"
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
