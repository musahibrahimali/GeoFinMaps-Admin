import Image from 'next/image';
import Link from 'next/link';

const ReportCard = (props) => {

    const { reportTitle, reportDescription, reportImage, reportAuthor, danger, warning, normal } = props;

    return (
        <div>
            <div
                className={
                    warning ?
                        "warning bg-white cursor-pointer border border-solid border-gray-200 p-4 hover:shadow-md flex flex-col justify-between items-center" :
                        "bg-white cursor-pointer border border-solid border-gray-200 p-4 hover:shadow-md flex flex-col justify-between items-center"
                            | danger ?
                            "danger bg-white cursor-pointer border border-solid border-gray-200 p-4 hover:shadow-md flex flex-col justify-between items-center" :
                            "bg-white cursor-pointer border border-solid border-gray-200 p-4 hover:shadow-md flex flex-col justify-between items-center"
                                | normal ?
                                "normal bg-white cursor-pointer border border-solid border-gray-200 p-4 hover:shadow-md flex flex-col justify-between items-center" :
                                "bg-white cursor-pointer border border-solid border-gray-200 p-4 hover:shadow-md flex flex-col justify-between items-center"
                }
            >
                <div className="bg-white">
                    <Image src={reportImage} height={200} width={200} alt="default graphics" />
                </div>
                <div>
                    <div>
                        <h1 className="text-black text-center text-lg uppercase font-extrabold tracking-wider">
                            {reportTitle}
                        </h1>
                    </div>
                    <div>
                        <div className="border-b-4 border-solid border-yellow-400 my-2 w-20 mx-auto"></div>
                        <p className="text-justify text-black font-normal">
                            {reportDescription}
                        </p>
                        <div className="py-2">
                            <p className="font-bold text-center text-base text-black">
                                Reported by
                                <Link href="/">
                                    <a>
                                        <span className="ml-2 text-blue-500 uppercase">{reportAuthor}</span>
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportCard;