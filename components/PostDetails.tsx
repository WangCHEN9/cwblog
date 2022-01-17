import Image from 'next/image';
import React, { FC } from 'react';
import moment from 'moment';
import { PostMeta } from '../components';
import { Post } from '../generated/graphql';

interface Props {
  post: Post;
}

interface getContentFragmentProps {
  index: string;
  text: JSX.IntrinsicElements;
  obj: { bold: boolean; italic: boolean; underline: boolean };
  type: string;
}

const PostDetails: FC<Props> = ({ post }) => {
  const getContentFragment = (Props: getContentFragmentProps) => {
    let modifiedText = Props.text;

    if (Props.obj) {
      if (Props.obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case 'heading-four':
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            layout="fill"
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <>
      <div
        className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8"
        key={post.title}
      >
        <div className="relative pb-80 mb-6">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            className="w-full object-center object-cover shadow-lg rounded-t-lg lg:rounded-lg"
            layout="fill"
          />
        </div>
        <div className="px-4 lg:px-0">
          <PostMeta post={post} />
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </>
  );
};

export default PostDetails;
