import Head from 'next/head';
import { Image11 } from '../assets/AssetExport';
import { OperatorCard } from '../components/exports';
import OperatorsData from '../data/operators.json';

const Operators = () => {
    return (
        <div>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GeofinMaps Admin - Operators</title>
                <meta name="description" content="The admin panel of the geofinmaps application for mtn ghana" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white">
                <div className="mt-3 px-4">
                    <h1 className="uppercase text-start text-blue-700 font-bold text-lg">Operators Online</h1>
                </div>
                <div className=" bg-white flex justify-evenly items-center">
                    <div className="bg-white">
                        {
                            OperatorsData.map(item => (
                                <div key={item.id}>
                                    <OperatorCard
                                        operatorId={item.id}
                                        operatorName={item.name}
                                        operatorProfileImage={Image11}
                                        operatorProfile={item.profile}
                                        isOperatorOnline={item.isOnline}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Operators;