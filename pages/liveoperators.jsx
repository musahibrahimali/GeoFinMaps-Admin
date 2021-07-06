import Head from 'next/head';
import { OperatorCard } from '../components/exports';
import OperatorsData from '../data/operators.json';
import { Image11 } from '../assets/AssetExport';

const LiveOperators = () => {
    return (
        <div>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GeofinMaps Admin - Operators Online</title>
                <meta name="description" content="The admin panel of the geofinmaps application for mtn ghana" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="h-full w-full">
                <div className="mt-3 px-4">
                    <h1 className="uppercase text-start text-blue-700 font-bold text-lg">Operators Online</h1>
                </div>
                <div className=" bg-white flex justify-evenly items-center">
                    <div className="">
                        {
                            OperatorsData.map(item => {
                                if (item.isOnline) {
                                    return (
                                        <div key={item.id}>
                                            <OperatorCard
                                                operatorId={item.id}
                                                operatorName={item.name}
                                                operatorProfileImage={Image11}
                                                operatorProfile={item.profile}
                                                isOperatorOnline={item.isOnline}
                                            />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div>

                                        </div>
                                    );
                                }
                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    );
}

export default LiveOperators;