import Head from 'next/head';
import { ReportCard } from '../components/exports';
import reportData from '../data/reportsData.json';
import { Image7 } from '../assets/AssetExport';

const Reports = () => {
    let danger = false;
    let warning = false;
    let normal = false;
    return (
        <div>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GeofinMaps Admin - Reports</title>
                <meta name="description" content="The admin panel of the geofinmaps application for mtn ghana" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white z-0">
                <div className="mt-3 px-4 mb-4">
                    <h1 className="uppercase text-start text-blue-700 font-bold text-lg">Reports</h1>
                </div>
                <div className=" bg-white flex justify-evenly items-center">
                    <div className="bg-white grid md:grid-cols-2 gap-4">
                        {
                            reportData.map(item => {
                                if (item.reportType === 1) {
                                    danger = true;
                                    warning = false;
                                    normal = false;
                                } else if (item.reportType === 2) {
                                    danger = false;
                                    warning = true;
                                    normal = false;
                                } else {
                                    danger = false;
                                    warning = false;
                                    normal = true;
                                }
                                return (
                                    <div key={item.id}>
                                        <ReportCard
                                            reportTitle={item.title}
                                            reportDescription={item.description}
                                            reportAuthor={item.author}
                                            reportImage={Image7}
                                            danger={danger}
                                            warning={warning}
                                            normal={normal}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Reports;