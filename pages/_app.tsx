import '@material/react-drawer/dist/drawer.css';
import 'react-image-lightbox/style.css';
import '../styles/global.css';

import { useEffect } from 'react';

import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const hanldeRouteChangeStart = () => {
      NProgress.start();
    };

    const handleRouteChangeComplete = () => {
      NProgress.done();
    };

    const handleRouteChangeError = () => NProgress.done();

    router.events.on('routeChangeStart', hanldeRouteChangeStart);

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', hanldeRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, []);

  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
