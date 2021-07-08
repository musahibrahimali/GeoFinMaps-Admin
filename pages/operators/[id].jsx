import Head from 'next/head';
import Image from 'next/image';
import OperatorsData from '../../data/operators.json';
import { profileImage, Image6, Image7, Image11 } from '../../assets/AssetExport';
import { ReportCard } from '../../components/exports';


// export const getStaticPaths = async () => {
//     // const response = await fetch(OperatorsData); /// pass api end Point
//     // const data = await response.json();

//     const response = await OperatorsData;
//     const data = await response;

//     const paths = data.map(operator => {
//         const ind = operator.id.toString();
//         console.log("the index is >>> ", ind);
//         return {
//             params: { index: ind.toString() }
//         }
//     });

//     return {
//         paths: paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context) => {
//     const id = context.params.index;
//     const response = await OperatorsData;
//     const data = await response[id];

//     return {
//         props: { operator: data }
//     }

// }

const OperatorDetails = (props) => {
    const { operator } = props;
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
            <div className="bg-white">
                <div className="bg-white my-5">
                    <h1 className="headings">
                        operator details
                    </h1>
                </div>
                <div className="bg-white p-4 flex flex-col justify-between items-center">
                    <div className="bg-white">
                        <h1 className="text-center p-2 text-lg md:text-xl lg:text-2xl text-gray-800 uppercase font-extrabold tracking-wide md:tracking-wider lg:tracking-widest cursor-default">
                            John Doe
                        </h1>
                    </div>
                    <div className="bg-white flex flex-col justify-evenly items-center">
                        <div className="bg-white p-4">
                            <p className="admin__text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quos inventore officiis quis totam, animi necessitatibus eum repellat aperiam omnis incidunt esse culpa deleniti soluta et error dolor quo!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quos inventore officiis quis totam, animi necessitatibus eum repellat aperiam omnis incidunt esse culpa deleniti soluta et error dolor quo!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quos inventore officiis quis totam, animi necessitatibus eum repellat aperiam omnis incidunt esse culpa deleniti soluta et error dolor quo!
                            </p>
                        </div>
                        <div className="bg-white">
                            <Image className="cursor-pointer hover:scale-100 transition-all duration-100" src={profileImage} width={1000} height={1000} alt="demo profile image" />
                        </div>
                        <div className="bg-white flex flex-col justify-between items-center">
                            <div className="bg-white my-5">
                                <h1 className="headings">
                                    Reports
                                </h1>
                            </div>
                            <div className="bg-white grid md:grid-cols-2 gap-2 mt-4">
                                <ReportCard
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