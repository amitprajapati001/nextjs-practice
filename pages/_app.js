import Layout from '../src/components/layout/layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../public/assets/css/style.css'
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}