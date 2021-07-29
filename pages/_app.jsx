import '../styles/globals.css';
import 'tailwindcss/tailwind.css'
import { Layout } from '../components/exports';
import { StateProvider } from '../provider/StateProvider';
import reducer, { initialState } from '../provider/reducer';

function MyApp({ Component, pageProps }) {

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}

export default MyApp;
