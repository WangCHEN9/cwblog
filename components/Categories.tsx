import React from 'react';
import Link from 'next/link';
import { useCategoriesQuery } from '../generated/graphql';
import { Loader } from '../components';

const Categories = () => {
  const { loading, error, data } = useCategoriesQuery();
  if (loading) return <Loader />;
  if (error) return <p>Error when useCategoriesQuery</p>;
  if (data) {
    const categories = data.categories || [];
    return (
      <div>
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            Categories
          </h3>
          {data?.categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              passHref
            >
              <span className="cursor-pointer block pb-3 mb-3">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    );
  } else return <p>error when rendering component Categories !!</p>;
};

export default Categories;
