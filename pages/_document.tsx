import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID, OPT_TRACKING_ID } from '../lib/gtag'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
        {/* GA_TRACKING_IDがあればスクリプトを呼び出す記述 */}
          {GA_TRACKING_ID && (
            <>
              <script async={true} src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });`,
                }}
              />
              <script src={`https://www.googleoptimize.com/optimize.js?id=${OPT_TRACKING_ID}`}></script>
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument