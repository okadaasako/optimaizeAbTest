import '../styles/globals.css'
import Router from "next/router";
import * as gtag from "../lib/gtag";
const handleRouteChange = (url: string) => {
  gtag.pageview(url);
};

// ルートの変化が完了したときに発火
Router.events.on("routeChangeComplete", handleRouteChange);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
