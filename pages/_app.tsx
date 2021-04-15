import '@material/react-drawer/dist/drawer.css';
import 'react-image-lightbox/style.css';

import { useEffect } from 'react';

import { useRouter } from 'next/router';
import NProgress from 'nprogress';

import { pageview } from '../lib/gtag';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const hanldeRouteChangeStart = () => {
      NProgress.start()
    }

    const handleRouteChangeComplete = (url) => {
      NProgress.done()
      pageview(url)
    }

    const handleRouteChangeError = () => NProgress.done()

    router.events.on("routeChangeStart", hanldeRouteChangeStart)

    router.events.on("routeChangeComplete", handleRouteChangeComplete)

    router.events.on("routeChangeError", handleRouteChangeError)

    return () => {
      router.events.off("routeChangeStart", hanldeRouteChangeStart)
      router.events.off("routeChangeComplete", handleRouteChangeComplete)
      router.events.off("routeChangeError", handleRouteChangeError)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
