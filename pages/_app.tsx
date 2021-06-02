import '../styles/globals.css'
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";

// Router.events.on("routeChangeComplete", handleRouteChange);

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    // if (!gtag.existsGaId) {
    //   return
    // }

    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }

    // ルートの変化が完了したときに発火
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
