import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Category, useCategoriesQuery } from '../generated/graphql';

const Categories = () => {
  const { loading, error, data } = useCategoriesQuery();
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
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
};

export default Categories;
