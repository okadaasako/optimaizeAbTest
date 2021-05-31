import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
// moduleを付けないとcssモジュールとして読み込んでくれない！
import styled from '../../styles/FirstPost.module.css'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div className={styled.abWrapper}>
        <h1 className={styled.firstTitle}>First Post</h1>
          <p>ABテストで下記を変える</p>
          <div className={styled.abBlock}></div>
          <h2>
            <Link href="/optimaizeAbTest/">
              <a>Back to home</a>
            </Link>
          </h2>
        </div>
    </Layout>
  )
}