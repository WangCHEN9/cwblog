import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import { PostMeta } from '../components';

const PostCard = ({ post }): JSX.Element => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8"
      key={post.title}
    >
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          layout="fill"
          className="object-center scale-auto w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1
        className="transaition duration-700 text-center mb-8 cursor-pointer 
                hover:text-pink-600 text-3xl font-semibold"
      >
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <PostMeta post={post} />
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`} passHref>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg front-medium rounded-full tetx-white px-8 py-3 cursor-pointer">
            Continue reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
