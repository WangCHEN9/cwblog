import '../styles/globals.scss';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// config.autoAddCss = false;

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

const client = new ApolloClient({
  uri: graphqlAPI,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
