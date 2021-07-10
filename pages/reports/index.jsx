import Head from 'next/head';
import { ReportCard } from '../../components/exports';
import ReportData from '../../data/reportsData.json';
import { Image7 } from '../../assets/AssetExport';

/* fetct data from database */
export const getStaticProps = async () => {
    // const response = await fetch(OperatorsData); /// pass api end point
    // const data = await response.json();
    const response = await ReportData;
    const data = await response;


    return {
        props: { reports: data },
    }
}

const Reports = (props) => {

    const { reports } = props;

    let danger = false;
    let warning = false;
    let normal = false;
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GeofinMaps Admin | Reports</title>
                <meta name="description" content="The admin panel of the geofinmaps application for mtn ghana" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white dark:bg-gray-900 z-0">
                <div className="mt-3 px-4 mb-4">
                    <h1 className="headings">Reports</h1>
                </div>
                <div className=" bg-white dark:bg-gray-900 flex justify-evenly items-center">
                    <div className="bg-white dark:bg-gray-900 grid md:grid-cols-2 gap-4">
                        {
                            reports.map(item => {
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
                                            url={'/reports/' + item.id}
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
        </>
    );
}

export default Reports;