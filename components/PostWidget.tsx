import React, { useState, useEffect, FC } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';
import Image from 'next/image';
import { Category, Post } from '../generated/graphql';

interface Props {
  categories?: Category;
  slug?: string;
}

const PostWidget: FC<Props> = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [categories, slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'Related Posts' : 'Recent posts'}
      </h3>
      {relatedPosts.map((post: Post) => (
        <div key={post.title} className="flex item-center w-full mb-4">
          <div className="w-16 flex-none align-left">
            <Link href={`/post/${post.slug}`} key={post.title} passHref>
              <Image
                className="object-center object-cover align-middle rounded-lg cursor-pointer"
                alt={post.title}
                height={60}
                width={60}
                src={post.featuredImage.url}
              />
            </Link>
          </div>

          <div className="flex-grow ml-4">
            <p className="text-gray=500 font-xs">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} passHref>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
