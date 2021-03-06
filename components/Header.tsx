import React from 'react';
import Link from 'next/link';
import { useCategoriesQuery } from '../generated/graphql';
import { Loader } from '../components';

const Header = () => {
  const { loading, error, data } = useCategoriesQuery();
  if (loading) return <Loader />;
  if (error) return <p>Error when useCategoriesQuery</p>;
  if (data) {
    const categories = data.categories || [];
    return (
      <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block board-blue-400 py-8">
          <div className="md:float-left block">
            <Link href="/" passHref>
              <span className="cursor-pointer font-bold text-3xl text-white transition duration-200 hover:text-orange-400">
                Wang
              </span>
            </Link>
          </div>
          <div className="hidden md:float-left md:contents">
            {categories.map(
              (category): JSX.Element => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  passHref
                >
                  <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-200 hover:text-orange-400">
                    {category.name}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    );
  } else return <p> error when rendering header component !</p>;
};

export default Header;
