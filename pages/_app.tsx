import '../styles/globals.css'
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";

// Router.events.on("routeChangeComplete", handleRouteChange);

declare const window: Window["window"] & {
  dataLayer: object[];
};

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

  const pathName = router.pathname;

  useEffect(() => {
    console.log(window.dataLayer);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "optimize.activate" });
  }, [pathName]);

  return <Component {...pageProps} />
}

export default MyApp
