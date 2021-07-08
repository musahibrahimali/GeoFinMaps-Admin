import Head from 'next/head';
import Image from 'next/image';
import { ReportCard } from '../../components/exports';
import { Image4, Image6, Image7, Image11 } from '../../assets/AssetExport';



const ReportDetails = () => {
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
            <main className="bg-white">
                <div className="mb-4 mt-4">
                    <h1 className="headings">Report Details</h1>
                </div>
                <div className="bg-white flex flex-col justify-between items-center">
                    <div className="bg-white">
                        <h1 className="text-center p-2 text-lg md:text-xl lg:text-2xl text-gray-900 uppercase font-extrabold tracking-wide md:tracking-wider lg:tracking-widest cursor-default">
                            Damage to fibre cable shielding
                        </h1>
                    </div>
                    <div className="bg-white flex flex-col justify-evenly items-center">

                        <div className="bg-white">
                            <div className="bg-white mt-5">
                                <h1 className="text-center text-lg md:text-xl lg:text-2xl text-gray-500 uppercase font-extrabold tracking-wide md:tracking-wider lg:tracking-widest cursor-default">
                                    report location
                                </h1>
                            </div>
                            <div className="bg-whit pb-4 pt-1 flex flex-col justify-between items-center">
                                <h1 className="px-4 text-gray-400 font-bold text-lg md:text-xl lg:text-2xl">
                                    Kumasi-central, Ashanti Region
                                </h1>
                                <h3 className="px-4 text-gray-400 font-bold text-base md:text-lg lg:text-xll">
                                    Lat: 123.456, lng: -234.567
                                </h3>
                            </div>
                        </div>

                        <div className="bg-white">
                            <h1 className="text-center mt-4 text-lg md:text-xl lg:text-2xl text-gray-500 uppercase font-extrabold tracking-wide md:tracking-wider lg:tracking-widest cursor-default">
                                report in detail
                            </h1>
                        </div>
                        <div className="bg-white px-4">
                            <p className="admin__text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quos inventore officiis quis totam, animi necessitatibus eum repellat aperiam omnis incidunt esse culpa deleniti soluta et error dolor quo!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quos inventore officiis quis totam, animi necessitatibus eum repellat aperiam omnis incidunt esse culpa deleniti soluta et error dolor quo!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quos inventore officiis quis totam, animi necessitatibus eum repellat aperiam omnis incidunt esse culpa deleniti soluta et error dolor quo!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quos inventore officiis quis totam, animi necessitatibus eum repellat aperiam omnis incidunt esse culpa deleniti soluta et error dolor quo!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quos inventore officiis quis totam, animi necessitatibus eum repellat aperiam omnis incidunt esse culpa deleniti soluta et error dolor quo!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quos inventore officiis quis totam, animi necessitatibus eum repellat aperiam omnis incidunt esse culpa deleniti soluta et error dolor quo!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quos inventore officiis quis totam, animi necessitatibus eum repellat aperiam omnis incidunt esse culpa deleniti soluta et error dolor quo!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quos inventore officiis quis totam, animi necessitatibus eum repellat aperiam omnis incidunt esse culpa deleniti soluta et error dolor quo!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quos inventore officiis quis totam, animi necessitatibus eum repellat aperiam omnis incidunt esse culpa deleniti soluta et error dolor quo!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quos inventore officiis quis totam, animi necessitatibus eum repellat aperiam omnis incidunt esse culpa deleniti soluta et error dolor quo!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quos inventore officiis quis totam, animi necessitatibus eum repellat aperiam omnis incidunt esse culpa deleniti soluta et error dolor quo!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quos inventore officiis quis totam, animi necessitatibus eum repellat aperiam omnis incidunt esse culpa deleniti soluta et error dolor quo!
                            </p>
                        </div>
                        <div className="bg-white">
                            <Image className="cursor-pointer hover:scale-100 transition-all duration-100" src={Image4} width={1000} height={1000} alt="demo profile image" />
                        </div>
                        <div className="bg-white flex flex-col justify-between items-center">
                            <div className="bg-white my-5">
                                <h1 className="headings">
                                    Other Reports
                                </h1>
                            </div>
                            <div className="bg-white grid md:grid-cols-2 gap-2 mt-4">
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