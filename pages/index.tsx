import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from "react";
import { useRouter } from "next/router";

declare const window: Window["window"] & {
  dataLayer: object[];
};

export default function Home() {
  const router = useRouter();
  const pathName = router.pathname;

  useEffect(() => {
    console.log(window.dataLayer);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "optimize.activate" });
  }, [pathName]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next Appテスト</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.ImageBlock}>
          <img
            src="./images/profile.svg"
            width={144}
            height={144}
            alt="Your Name"
          />
        </div>
        <h1 className={styles.title}>ABテスト用！</h1>
        <div className={styles.pageNext}>
          <Link href="/optimaizeAbTest/posts/first-post">
            <a>this page!</a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="./vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
