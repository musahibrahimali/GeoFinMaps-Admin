import Head from 'next/head';
import Link from 'next/link';

const HelpPage = () => {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GeofinMaps Admin | Help and support</title>
                <meta name="description" content="The admin panel of the geofinmaps application for mtn ghana" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white dark:bg-gray-900">
                <div
                    className="bg-white dark:bg-gray-900 flex flex-col justify-between place-items-center"
                >
                    <h1
                        className="text-gray-700 dark:text-gray-200 uppercase text-extrabold my-4 text-xl md:text-4xl lg:text-6xl"
                    >
                        Help
                    </h1>
                    <div className="bg-white dark:bg-gray-900">
                        <p
                            className="text-gray-700 dark:text-gray-200 text-justify text-base md:text-lg lg:text-xl"
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis ea, harum possimus voluptatibus voluptate consequuntur blanditiis nobis. Debitis officiis quo incidunt repellendus eos dolorum doloribus placeat dolor magni odit.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis ea, harum possimus voluptatibus voluptate consequuntur blanditiis nobis. Debitis officiis quo incidunt repellendus eos dolorum doloribus placeat dolor magni odit.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis ea, harum possimus voluptatibus voluptate consequuntur blanditiis nobis. Debitis officiis quo incidunt repellendus eos dolorum doloribus placeat dolor magni odit.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis ea, harum possimus voluptatibus voluptate consequuntur blanditiis nobis. Debitis officiis quo incidunt repellendus eos dolorum doloribus placeat dolor magni odit.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis ea, harum possimus voluptatibus voluptate consequuntur blanditiis nobis. Debitis officiis quo incidunt repellendus eos dolorum doloribus placeat dolor magni odit.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis ea, harum possimus voluptatibus voluptate consequuntur blanditiis nobis. Debitis officiis quo incidunt repellendus eos dolorum doloribus placeat dolor magni odit.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default HelpPage;