import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { UploadImage } from '../../assets/AssetExport';
import firebase from 'firebase';
import 'firebase/database';

const LoadDataFile = () => {
    const [file, setFile] = useState();

    const handleOnChange = (event) => {
        let selectedFile = event.target.files[0];
        if (selectedFile.type == 'application/json') {
            setFile(selectedFile);
        } else {
            alert("The selected file is not supported");
        }
        console.log(file);
        console.log(file.name);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (file.endsWith('.json')) {
            let fileContent = file;
            fileContent.map((item) => {
                firebase.firestore().collection('layings').add(item);
            });
        } else {
            alert("The selected file is not supported on this platform");
        }
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
                <div className="bg-white dark:bg-gray-900 flex justify-center items-center">
                    <div className="sm:max-w-lg w-full p-10 bg-white dark:bg-gray-900 shadow-md rounded-xl border border-solid border-gray-200 dark:border-gray-600">
                        <div className="text-center">
                            <h2 className="mt-5 text-3xl font-bold uppercase text-gray-800 dark:text-gray-200">
                                File Upload
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                                select a JSON file type conataining data for upload
                            </p>
                        </div>
                        <form className="mt-8 space-y-3" onSubmit={handleOnSubmit}>
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
                                                    className="text-blue-600 cursor-pointer hover:underline">
                                                    select a file
                                                </span>
                                                {" "}
                                                from your computer
                                            </p>
                                        </div>
                                        <input type="file" name="file" onChange={handleOnChange} />
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-sm text-gray-500 dark:text-gray-300">
                                    <span>File type : json (example {"sample.json"})</span>
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Selected File: {file ? file.name : "No file"}</p>
                            </div>
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
        </>
    );
}

export default LoadDataFile;