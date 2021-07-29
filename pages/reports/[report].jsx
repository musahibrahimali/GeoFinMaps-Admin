import Head from 'next/head';
import Image from 'next/image';
import ReportData from '../../data/reportsData.json';
import { ReportCard } from '../../components/exports';
import { Image4, Image6, Image7, Image11 } from '../../assets/AssetExport';

export const getStaticPaths = async () => {
    // const response = await fetch(OperatorsData); /// pass api end Point
    // const data = await response.json();

    const response = await ReportData;
    const data = await response;

    const paths = data.map(item => {
        return {
            params: { report: item.id.toString() }
        }
    });

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const report = context.params.report - 1;
    const response = await ReportData;
    const data = await response[report];

    return {
        props: { reportData: data }
    }

}

const ReportDetails = (props) => {
    const { reportData } = props;

    let threatLevel = false;
    let warningLevel = false;
    let normalLevel = false;

    if (reportData.reportType === 1) {
        threatLevel = true;
        warningLevel = false;
        normalLevel = false;
    } else if (reportData.reportType === 2) {
        threatLevel = false;
        warningLevel = true;
        normalLevel = false;
    } else {
        threatLevel = false;
        warningLevel = false;
        normalLevel = true;
    }

    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GeofinMaps Admin | Report Details</title>
                <meta name="description" content="The admin panel of the geofinmaps application for mtn ghana" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white dark:bg-gray-900">
                <div className="mb-4 mt-4">
                    <h1 className="headings">Report Details</h1>
                </div>
                <div className="bg-white dark:bg-gray-900 flex flex-col justify-between items-center">
                    <div className="bg-white dark:bg-gray-900">
                        <h1 className="text-center p-2 text-lg md:text-xl lg:text-2xl text-gray-900 uppercase font-extrabold tracking-wide md:tracking-wider lg:tracking-widest cursor-default">
                            {reportData.title}
                        </h1>
                    </div>
                    <div className="bg-white dark:bg-gray-900 flex flex-col justify-evenly items-center">

                        <div className="bg-white dark:bg-gray-900">
                            <div className="bg-white dark:bg-gray-900 mt-5">
                                <h1
                                    className="text-center text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-200 uppercase font-extrabold tracking-wide md:tracking-wider lg:tracking-widest cursor-default"
                                >
                                    location
                                </h1>
                            </div>
                            <div className="bg-whit pb-4 pt-1 flex flex-col justify-between items-center">
                                <h1 className="px-4 text-gray-600 dark:text-gray-400 font-bold text-lg md:text-xl lg:text-2xl">
                                    {reportData.location}
                                </h1>
                                <h3 className="px-4 text-gray-500 dark:text-gray-300 font-bold text-base md:text-lg lg:text-xl">
                                    {reportData.coordinates.lat},
                                    {reportData.coordinates.lng}
                                </h3>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-900">
                            <h1
                                className="text-center mt-4 text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 uppercase font-extrabold tracking-wide md:tracking-wider lg:tracking-widest cursor-default"
                            >
                                report details
                            </h1>
                        </div>
                        <div className="bg-white dark:bg-gray-900 px-4">
                            <p className="admin__text">
                                {reportData.description}
                            </p>
                            <div
                                className="bg-white dark:bg-gray-900 flex flex-row justify-start items-center"
                            >
                                <p
                                    className="text-left mr-2 text-blue-400 dark:text-green-600 font-bold uppercase tracking-tighter mt-2"
                                >
                                    {reportData.author}
                                </p>
                                <p className="text-left mr-2 text-gray-500 dark:text-gray-300 font-bold uppercase tracking-tighter mt-2">
                                    {" - "} report level {" - "}
                                </p>
                                <p className={
                                    threatLevel ?
                                        "text-left text-red-600 font-bold uppercase tracking-tighter mt-2"
                                        : "text-left text-blue-400 dark:text-green-500 font-bold uppercase tracking-tighter mt-2"
                                            | warningLevel ? "text-left text-yellow-600 font-bold uppercase tracking-tighter mt-2"
                                            : "text-left text-blue-400 font-bold uppercase tracking-tighter mt-2"
                                                | normalLevel ? "text-left text-green-600 font-bold uppercase tracking-tighter mt-2" : "text-left text-blue-400 font-bold uppercase tracking-tighter mt-2"
                                }>
                                    {
                                        threatLevel ?
                                            "Threat" : ""
                                                | warningLevel ? "Warning" : ""
                                                    | normalLevel ? "Normal" : ""
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-900">
                            <Image
                                className="cursor-pointer hover:scale-100 transition-all duration-100"
                                src={Image4}
                                width={1000}
                                height={1000}
                                alt="demo profile image"
                            />
                        </div>
                        <div className="bg-white dark:bg-gray-900 flex flex-col justify-between items-center">
                            <div className="bg-white dark:bg-gray-900 my-5">
                                <h1 className="headings">
                                    Other Reports
                                </h1>
                            </div>
                            <div className="bg-white dark:bg-gray-900 grid md:grid-cols-2 gap-2 mt-4">
                                <ReportCard
                                    url={"/reports/1"}
                                    reportTitle="Report Number One"
                                    reportDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione exercitationem inventore fuga recusandae, natus aut? Id rerum neque molestiae nisi? Aspernatur numquam quis quisquam doloremque vitae maiores voluptas modi!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione exercitationem inventore fuga recusandae, natus aut? Id rerum neque molestiae nisi? Aspernatur numquam quis quisquam doloremque vitae maiores voluptas modi!"

                                    reportAuthor="John Doe"
                                    reportImage={Image6}
                                    danger={true}
                                    warning={false}
                                    normal={false}
                                />
                                <ReportCard
                                    url={"/reports/2"}
                                    reportTitle="Report Number Two"
                                    reportDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione exercitationem inventore fuga recusandae, natus aut? Id rerum neque molestiae nisi? Aspernatur numquam quis quisquam doloremque vitae maiores voluptas modi!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione exercitationem inventore fuga recusandae, natus aut? Id rerum neque molestiae nisi? Aspernatur numquam quis quisquam doloremque vitae maiores voluptas modi!"

                                    reportAuthor="John Doe"
                                    reportImage={Image7}
                                    danger={false}
                                    warning={false}
                                    normal={true}
                                />
                                <ReportCard
                                    url={"/reports/3"}
                                    reportTitle="Report Number Four"
                                    reportDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione exercitationem inventore fuga recusandae, natus aut? Id rerum neque molestiae nisi? Aspernatur numquam quis quisquam doloremque vitae maiores voluptas modi!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione exercitationem inventore fuga recusandae, natus aut? Id rerum neque molestiae nisi? Aspernatur numquam quis quisquam doloremque vitae maiores voluptas modi!"

                                    reportAuthor="John Doe"
                                    reportImage={Image11}
                                    danger={false}
                                    warning={true}
                                    normal={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ReportDetails;