import Head from 'next/head';
import { OperatorCard } from '../../components/exports';
import OperatorsData from '../../data/operators.json';
import { profileImage } from '../../assets/AssetExport';

/* fetct data from database */
export const getStaticProps = async () => {
    // const response = await fetch(OperatorsData); /// pass api end point
    // const data = await response.json();
    const response = await OperatorsData;
    const data = await response;


    return {
        props: { operators: data },
    }
}

const Operators = (props) => {
    const { operators } = props;
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GeofinMaps Admin | Operators</title>
                <meta name="description" content="The admin panel of the geofinmaps application for mtn ghana" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white dark:bg-gray-900">
                <div className="mt-3 px-4">
                    <h1 className="headings">Operators</h1>
                </div>
                <div className=" bg-white dark:bg-gray-900 flex justify-evenly items-center">
                    <div className="bg-white dark:bg-gray-900">
                        {
                            operators.map(item => (
                                <div key={item.id}>
                                    <OperatorCard
                                        url={"/operators/" + item.id}
                                        operatorName={item.name}
                                        operatorProfileImage={profileImage}
                                        operatorProfile={item.profile}
                                        isOperatorOnline={item.isOnline}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    );
}

export default Operators;