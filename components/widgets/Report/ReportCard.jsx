import Image from 'next/image';
import Link from 'next/link';

const ReportCard = (props) => {

    const {
        url,
        reportTitle,
        reportDescription,
        reportImage,
        reportAuthor,
        danger,
        warning,
        normal
    } = props;

    return (
        <div className="bg-white dark:bg-gray-900 p-2">
            <Link href={url}>
                <a>
                    <div
                        className={
                            warning ?
                                "warning bg-white dark:bg-gray-900 cursor-pointer border border-solid border-gray-200 dark:border-gray-600 p-4 hover:shadow-md flex flex-col justify-between items-center" :
                                "bg-white dark:bg-gray-900 cursor-pointer border border-solid border-gray-200 dark:border-gray-600 p-4 hover:shadow-md flex flex-col justify-between items-center"
                                    | danger ?
                                    "danger bg-white dark:bg-gray-900 cursor-pointer border border-solid border-gray-200 dark:border-gray-600 p-4 hover:shadow-md flex flex-col justify-between items-center" :
                                    "bg-white dark:bg-gray-900 cursor-pointer border border-solid border-gray-200 dark:border-gray-600 p-4 hover:shadow-md flex flex-col justify-between items-center"
                                        | normal ?
                                        "normal bg-white dark:bg-gray-900 cursor-pointer border border-solid border-gray-200 dark:border-gray-600 p-4 hover:shadow-md flex flex-col justify-between items-center" :
                                        "bg-white dark:bg-gray-900 cursor-pointer border border-solid border-gray-200 dark:border-gray-600 p-4 hover:shadow-md flex flex-col justify-between items-center"
                        }>
                        <div className="bg-white dark:bg-gray-900">
                            <Image
                                src={reportImage}
                                height={200}
                                width={200}
                                alt="default graphics"
                            />
                        </div>
                        <div className="bg-white dark:bg-gray-900">
                            <div className="bg-white  dark:bg-gray-900">
                                <h1 className="text-gray-700 dark:text-gray-100 text-center text-lg uppercase font-extrabold tracking-wider">
                                    {reportTitle}
                                </h1>
                            </div>
                            <div className="bg-white dark:bg-gray-900">

                                <div className={
                                    danger ? "border-b-4 border-solid border-red-600 my-2 w-20 mx-auto"
                                        : "border-b-4 border-solid border-red-400 my-2 w-20 mx-auto"
                                            | warning ? "border-b-4 border-solid border-yellow-600 my-2 w-20 mx-auto"
                                            : "border-b-4 border-solid border-yellow-400 my-2 w-20 mx-auto"
                                                | normal ? "border-b-4 border-solid border-green-600 my-2 w-20 mx-auto" : "border-b-4 border-solid border-green-400 my-2 w-20 mx-auto"
                                }>
                                </div>

                                <p className="text-justify text-gray-700 dark:text-gray-200 font-normal">
                                    {reportDescription}
                                </p>
                                <div className="py-2">
                                    <p className="font-bold text-center text-base text-gray-700 dark:text-gray-200">
                                        Reported by
                                        <Link href="">
                                            <a>
                                                <span
                                                    className="ml-2 text-blue-500 dark:text-green-600 uppercase">
                                                    {reportAuthor}
                                                </span>
                                            </a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default ReportCard;