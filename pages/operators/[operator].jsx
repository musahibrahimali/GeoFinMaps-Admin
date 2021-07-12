import Head from 'next/head';
import Image from 'next/image';
import OperatorsData from '../../data/operators.json';
import { profileImage, Image6, Image7, Image11 } from '../../assets/AssetExport';
import { ReportCard } from '../../components/exports';


export const getStaticPaths = async () => {
    // const response = await fetch(OperatorsData); /// pass api end Point
    // const data = await response.json();

    const response = await OperatorsData;
    const data = await response;

    const paths = data.map(item => {
        return {
            params: { operator: item.id.toString() }
        }
    });

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const operator = context.params.operator - 1;
    const response = await OperatorsData;
    const data = await response[operator];

    return {
        props: { operatorData: data }
    }
}

const OperatorDetails = (props) => {
    const { operatorData } = props;

    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GeofinMaps Admin | Operator Details</title>
                <meta name="description" content="The admin panel of the geofinmaps application for mtn ghana" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-white dark:bg-gray-900">
                <div className="bg-white dark:bg-gray-900 my-5">
                    <h1 className="headings">
                        operator details
                    </h1>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 flex flex-col justify-center items-center">
                    {/* This is a demo profile card */}
                    <div>
                        <div className="md:grid grid-cols-4 grid-rows-2  bg-white dark:bg-gray-900 gap-2">
                            <div className="bg-white dark:bg-gray-900 md:col-span-1 h-48 shadow-md">
                                <div className="bg-white dark:bg-gray-900 flex w-full h-full relative justify-center object-cover" >
                                    <Image
                                        loading='lazy'
                                        src={profileImage}
                                        width={240}
                                        height={140}
                                        className="object-cover m-auto"
                                        alt="this is a demo image"
                                    />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-900 md:col-span-3 h-48 shadow-md p-4">
                                <div className="bg-white dark:bg-gray-900 border border-solid border-gray-400 dark:border-gray-600 flex m-2">
                                    <span
                                        className="profile__card__option whitespace-no-wrap">
                                        Name
                                    </span>
                                    <input
                                        className="profile__card__detail"
                                        type="text"
                                        value={operatorData.name}
                                        readOnly
                                    />
                                </div>
                                <div className="bg-white dark:bg-gray-900 flex m-2 border border-solid border-gray-400 dark:border-gray-600">
                                    <span className="profile__card__option whitespace-no-wrap">
                                        Email
                                    </span>
                                    <input
                                        className="profile__card__detail"
                                        type="text"
                                        value={operatorData.email}
                                        readOnly
                                    />
                                </div>
                                <div className="bg-white dark:bg-gray-900 flex m-2 border border-solid border-gray-400 dark:border-gray-600" >
                                    <span className="profile__card__option whitespace-no-wrap">
                                        Role
                                    </span>
                                    <input
                                        className="profile__card__detail"
                                        type="text"
                                        value={operatorData.role}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-900 md:col-span-4 shadow-md p-4 -mt-20 mb-4">
                                <h3 className="p-2 mt-4 mb-4 text-base text-center md:text-left md:text-lg lg:text-xl text-gray-800 dark:text-gray-300 uppercase font-extrabold tracking-wide md:tracking-wider lg:tracking-widest cursor-default" >
                                    Profile Description
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 text-justify font-normal text-base md:text-lg lg:text-xl">
                                    {operatorData.profile}
                                    {operatorData.profile}
                                    {operatorData.profile}
                                    {operatorData.profile}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* This is a demo profile card */}

                    <div
                        className="bg-white dark:bg-gray-900 flex flex-col justify-evenly items-center"
                    >
                        <div
                            className="bg-white dark:bg-gray-900 flex flex-col justify-between items-center"
                        >
                            <div className="bg-white dark:bg-gray-900 my-5">
                                <h1 className="headings">
                                    Reports
                                </h1>
                            </div>
                            <div
                                className="bg-white dark:bg-gray-900 grid md:grid-cols-2 gap-2 mt-4"
                            >
                                <ReportCard
                                    url={'/reports/1'}
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
                                    url={'/reports/2'}
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
                                    url={'/reports/3'}
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
            </div>
        </>
    );
}

export default OperatorDetails;