import Head from 'next/head';

const AdminPrevileges = () => {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GeofinMaps Admin | Admin Benefits</title>
                <meta name="description" content="The admin panel of the geofinmaps application for mtn ghana" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white dark:bg-gray-900 overflow-hidden">
                <div className="bg-white dark:bg-gray-900 mt-3 mb-4 px-4">
                    <h1 className="headings">
                        adiminstrator previleges
                    </h1>
                </div>
                <div className="bg-white dark:bg-gray-900 flex flex-col justify-between items-center">
                    {/* administrator overview goes here */}
                    <div className="bg-white dark:bg-gray-900 mt-4">
                        <div className="bg-white dark:bg-gray-900">
                            <h1 className="text-center text-gray-800 dark:text-gray-300 text-2xl md:text-4xl font-bold uppercase">
                                What can i do as an administrator
                            </h1>
                        </div>
                        <div className=" bg-white dark:bg-gray-900 p-4">
                            <p className="admin__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi sit perferendis, dicta earum accusantium vitae autem tempora doloremque animi dolore iste aliquid provident ipsa in fugiat illum error numquam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi sit perferendis, dicta earum accusantium vitae autem tempora doloremque animi dolore iste aliquid provident ipsa in fugiat illum error numquam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi sit perferendis, dicta earum accusantium vitae autem tempora doloremque animi dolore iste aliquid provident ipsa in fugiat illum error numquam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi sit perferendis, dicta earum accusantium vitae autem tempora doloremque animi dolore iste aliquid provident ipsa in fugiat illum error numquam.
                            </p>
                        </div>
                    </div>
                    {/* instructions goes here */}
                    <div className="bg-white dark:bg-gray-900 mt-4">
                        <div className="bg-white dark:bg-gray-900">
                            <h1
                                className="text-center text-gray-800 dark:text-gray-300 text-2xl md:text-4xl font-bold uppercase"
                            >
                                Instructions
                            </h1>
                        </div>
                        <div className=" bg-white dark:bg-gray-900 p-4">
                            <p className="admin__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi sit perferendis, dicta earum accusantium vitae autem tempora doloremque animi dolore iste aliquid provident ipsa in fugiat illum error numquam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi sit perferendis, dicta earum accusantium vitae autem tempora doloremque animi dolore iste aliquid provident ipsa in fugiat illum error numquam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi sit perferendis, dicta earum accusantium vitae autem tempora doloremque animi dolore iste aliquid provident ipsa in fugiat illum error numquam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi sit perferendis, dicta earum accusantium vitae autem tempora doloremque animi dolore iste aliquid provident ipsa in fugiat illum error numquam.
                            </p>
                        </div>
                    </div>

                    {/* more details follows */}
                    <div className="bg-white dark:bg-gray-900 mt-4">
                        <div className="bg-white dark:bg-gray-900">
                            <h1 className="text-center text-gray-800 dark:text-gray-300 text-2xl md:text-4xl font-bold uppercase">
                                More Details
                            </h1>
                        </div>
                        <div className=" bg-white dark:bg-gray-900 p-4">
                            <p className="admin__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi sit perferendis, dicta earum accusantium vitae autem tempora doloremque animi dolore iste aliquid provident ipsa in fugiat illum error numquam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi sit perferendis, dicta earum accusantium vitae autem tempora doloremque animi dolore iste aliquid provident ipsa in fugiat illum error numquam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi sit perferendis, dicta earum accusantium vitae autem tempora doloremque animi dolore iste aliquid provident ipsa in fugiat illum error numquam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi sit perferendis, dicta earum accusantium vitae autem tempora doloremque animi dolore iste aliquid provident ipsa in fugiat illum error numquam.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default AdminPrevileges;