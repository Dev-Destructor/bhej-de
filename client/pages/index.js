import Head from 'next/head'
import DownloadFile from '../components/DownloadFile'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import UploadFile from '../components/UploadFile'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Bhej-de</title>
        <meta name="description" content="Share your files with Bhej-De" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <NavBar />
        <hr />
        <UploadFile />  
        <DownloadFile />
        <Footer />
      </main>
    </div>
  )
}
