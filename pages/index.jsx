import Head from 'next/head';
import { Body } from '../components/exports';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GeofinMaps Admin</title>
        <meta name="description" content="The admin panel of the geofinmaps application for mtn ghana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white h-full w-full">
        <Body />
      </main>
    </div>
  )
}
