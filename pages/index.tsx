import Head from 'next/head';
import { PostCard, PostWidget } from '../components/';
import Categories from '../components/Categories';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';

export default function Home({ posts }: any) {
  return (
    <div>
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>CHEN Wang - Blog</title>
          <link rel="icon" href="/coding.png" />
        </Head>
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post: any) => (
              <PostCard post={post.node} key={post.title} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
