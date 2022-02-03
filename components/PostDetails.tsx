import Image from 'next/image';
import React, { FC } from 'react';
import { PostMeta } from '../components';
import { Post } from '../generated/graphql';
import {
  CopyBlock,
  github,
  monokai,
  nord,
  googlecode,
  monoBlue,
  monokaiSublime,
} from 'react-code-blocks';

interface Props {
  post: Post;
}

interface getContentFragmentProps {
  index: string;
  text: any;
  obj: any;
  type: string | null;
}

const PostDetails: FC<Props> = ({ post }) => {
  const getContentFragment = (Props: getContentFragmentProps) => {
    let modifiedText = Props.text;

    if (Props.obj) {
      if (Props.obj.bold) {
        modifiedText = <b key={Props.index}>{Props.text}</b>;
      }

      if (Props.obj.italic) {
        modifiedText = <em key={Props.index}>{Props.text}</em>;
      }

      if (Props.obj.underline) {
        modifiedText = <u key={Props.index}>{Props.text}</u>;
      }
    }

    switch (Props.type) {
      case 'heading-one':
        return (
          <h1 key={Props.index} className="text-3xl font-semibold mb-4">
            {modifiedText.map((item: any, i: string) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h1>
        );
      case 'heading-two':
        return (
          <h2 key={Props.index} className="text-2xl font-semibold mb-4">
            {modifiedText.map((item: any, i: string) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case 'heading-three':
        return (
          <h3 key={Props.index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item: any, i: string) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case 'paragraph':
        return (
          <p key={Props.index} className="mb-8">
            {modifiedText.map((item: any, i: string) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case 'heading-four':
        return (
          <h4 key={Props.index} className="text-md font-semibold mb-4">
            {modifiedText.map((item: any, i: string) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case 'code-block':
        return (
          <div key={Props.index} className="text-sm font-semibold mb-4">
            {modifiedText.map((item: any, i: string) => (
              <React.Fragment key={i}>
                <CopyBlock
                  theme={monokaiSublime}
                  text={item}
                  language={'python'}
                  wrapLines
                />
              </React.Fragment>
            ))}
          </div>
        );
      case 'image':
        return (
          <Image
            key={Props.index}
            alt={Props.obj.title}
            height={Props.obj.height}
            width={Props.obj.width}
            src={Props.obj.src}
            layout="responsive"
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
          {post.content.raw.children.map((typeObj: any, index: string) => {
            const children = typeObj.children.map(
              (item: any, itemindex: string) =>
                getContentFragment({
                  index: itemindex,
                  text: item.text,
                  obj: item,
                  type: null,
                })
            );

            return getContentFragment({
              index: index,
              text: children,
              obj: typeObj,
              type: typeObj.type,
            });
          })}
        </div>
      </div>
    </>
  );
};

export default PostDetails;
