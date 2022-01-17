import React, { FC } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { useCommentsQuery } from '../generated/graphql';
interface Props {
  slug: string;
}

const Comments: FC<Props> = ({ slug }) => {
  const { data, loading, error } = useCommentsQuery({
    variables: {
      slug: slug,
    },
  });
  if (loading) return <p className="text-yellow">loading comments</p>;
  if (error)
    return (
      <p className="text-pink-700 font-bold">error when loading comments</p>
    );
  if (data)
    return (
      <>
        {data.comments.length > 0 && (
          <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
              {data.comments.length}
              {'    '}
              Commments
            </h3>
            {data.comments.map((comment) => (
              <div
                key={comment.createdAt}
                className="border-b border-gray-100 mb-4 pb-4"
              >
                <p className="mb-4">
                  <span className="font-semibold">{comment.name}</span>
                  {'  '} on {'  '}
                  {moment(comment.createdAt).format('MMM DD,YYYY')}
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full">
                  {parse(comment.comment)}
                </p>
              </div>
            ))}
          </div>
        )}
      </>
    );
  else return <>something wrong for comment component!!!</>;
};

export default Comments;
