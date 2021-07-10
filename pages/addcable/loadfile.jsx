import Head from 'next/head';
import Image from 'next/image';
import { UploadImage } from '../../assets/AssetExport';

const LoadDataFile = () => {

    // select a file from your computer (json file)
    const handleSelectFile = () => {

    }

    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GeofinMaps Admin | Data Section</title>
                <meta name="description" content="The admin panel of the geofinmaps application for mtn ghana" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-white mt-10 mb-10 dark:bg-gray-900 p-6">
                <div className="bg-white dark:bg-gray-900">
                    <div className="sm:max-w-lg w-full p-10 bg-white dark:bg-gray-900 shadow-md rounded-xl border border-solid border-gray-200 dark:border-gray-600">
                        <div className="text-center">
                            <h2 className="mt-5 text-3xl font-bold uppercase text-gray-800 dark:text-gray-200">
                                File Upload
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                                select a JSON file type conataining data for upload
                            </p>
                        </div>
                        <form className="mt-8 space-y-3" action="#" method="POST">
                            <div className="grid grid-cols-1 space-y-2">
                                <label className="text-lg uppercase font-bold text-gray-700 dark:text-gray-300 tracking-wide">
                                    Load JSON File
                                </label>
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col rounded-lg border-4 border-dashed w-full border-gray-200 dark:border-gray-500 h-60 p-10 group text-center">
                                        <div className="h-full w-full text-center flex flex-col items-center justify-center">
                                            <div className="flex flex-auto max-h-48 mx-auto p-6">
                                                <Image
                                                    src={UploadImage}
                                                    alt="upload image"
                                                />
                                            </div>
                                            <p className="pointer-none text-gray-500 dark:text-gray-300">
                                                <span
                                                    onMouseDown={handleSelectFile}
                                                    className="text-blue-600 cursor-pointer hover:underline">
                                                    select a file
                                                </span>
                                                {" "}
                                                from your computer
                                            </p>
                                        </div>
                                        <input type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-300">
                                <span>File type : json (example {"sample.json"})</span>
                            </p>
                            <div>
                                <button type="submit"
                                    className="my-5 w-full border md:border border-gray-200 flex justify-center bg-gray-900 border-opacity-0 hover:border-opacity-0 dark:bg-gray-100 dark:text-gray-900 text-gray-100 p-4  rounded-full tracking-wide font-bold  focus:outline-none focus:shadow-outline hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-transparent dark:hover:border-gray-400 dark:hover:text-gray-300 shadow-md cursor-pointer transition ease-in duration-300 uppercase text-base md:text:lg lg:text-xl"
                                >
                                    Upload
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            {/* <div className="mt-4 mb-4 w-full overflow-hidden">
                <div className="sm:max-w-lg w-full p-10 bg-white dark:bg-gray-900 shadow-md rounded-xl border border-solid border-gray-200 dark:border-gray-600">
                    <div className="text-center">
                        <h2 className="mt-5 text-3xl font-bold text-gray-900">
                            File Upload
                        </h2>
                        <p className="mt-2 text-sm text-gray-400">
                            Lorem ipsum is placeholder text.
                        </p>
                    </div>
                    <form className="mt-8 space-y-3" action="#" method="POST">
                        <div className="grid grid-cols-1 space-y-2">
                            <label className="text-sm uppercase font-bold text-gray-500 tracking-wide">
                                Load JSON File
                            </label>
                            <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                    <div className="h-full w-full text-center flex flex-col items-center justify-center">
                                        <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                            <Image
                                                className="has-mask h-36 object-center" src={UploadImage} alt="freepik image" />
                                        </div>
                                        <p className="pointer-none text-gray-500">
                                            <span className="text-sm">
                                                Drag and drop
                                            </span> files here <br />
                                            or
                                            <a
                                                className="text-blue-600 hover:underline"
                                                href="" id="" >
                                                select a file
                                            </a>
                                            from your computer
                                        </p>
                                    </div>
                                    <input type="file" className="hidden" />
                                </label>
                            </div>
                        </div>
                        <p className="text-sm text-gray-300">
                            <span>File type: doc,pdf,types of images</span>
                        </p>
                        <div>
                            <button type="submit" className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
                                Upload
                            </button>
                        </div>
                    </form>
                </div>
            </div> */}
        </>
    );
}

export default LoadDataFile;