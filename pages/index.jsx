import Head from 'next/head';
import { HomePage } from '../components/exports';

export default function Home() {
  return (
    <div>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GeofinMaps Admin - Home</title>
        <meta name="description" content="The admin panel of the geofinmaps application for mtn ghana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white h-full w-full">
        <HomePage />
      </main>
    </div>
  )
}
