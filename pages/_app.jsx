import '../styles/globals.css';
import 'tailwindcss/tailwind.css'
import { Layout } from '../components/exports';
import { StateProvider } from '../provider/StateProvider';

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}

export default MyApp;
