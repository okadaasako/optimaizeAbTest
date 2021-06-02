import '../styles/globals.css'
import Router from "next/router";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";

// Router.events.on("routeChangeComplete", handleRouteChange);

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // if (!gtag.existsGaId) {
    //   return
    // }

    const handleRouteChange = (path) => {
      gtag.pageview(path)
    }

    // ルートの変化が完了したときに発火
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [Router.events])

  return <Component {...pageProps} />
}

export default MyApp
