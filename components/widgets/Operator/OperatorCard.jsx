import Avatar from '@material-ui/core/Avatar';
import Link from 'next/link';

const OperatorCard = (props) => {

    const { url, operatorName, operatorProfile, operatorProfileImage, isOperatorOnline } = props;
    const profilePicture = operatorProfileImage.src;

    return (
        <Link href={url}>
            <a>
                <div
                    className={
                        isOperatorOnline ?
                            "m-4 cursor-pointer border border-solid hover:border-green-400 dark:hover:border-green-600 hover:shadow-md "
                            : "m-4 cursor-pointer border border-solid hover:border-gray-400 dark:hover:border-gray-400 hover:shadow-md"
                    }
                >
                    <div
                        className="bg-white dark:bg-gray-900 p-2 mx-auto flex flex-row justify-around items-center"
                    >
                        <div
                            className={
                                isOperatorOnline ?
                                    "bg-white dark:bg-gray-900 m-4 border border-solid border-green-500 dark:border-green-600 rounded-full" :
                                    "bg-white dark:bg-gray-900 m-4 border border-solid border-gray-500 dark:border-gray-600 rounded-full"
                            }
                        >
                            <Avatar src={profilePicture} />
                        </div>
                        <div
                            className="flex flex-col justify-between items-center bg-white dark:bg-gray-900"
                        >
                            <div>
                                <h1
                                    className="text-gray-700 dark:text-gray-200 font-bold text-center text-xl uppercase"
                                >
                                    {operatorName}
                                </h1>
                            </div>
                            <div className="bg-white dark:bg-gray-900">
                                <p
                                    className="font-normal text-base text-justify text-gray-700 dark:text-gray-300"
                                >
                                    {operatorProfile}
                                </p>
                            </div>
                        </div>
                        <div className="pl-4 w-40 bg-white dark:bg-gray-900">
                            {
                                isOperatorOnline ?
                                    <div
                                        className="shadow-md rounded-full w-5 h-5 bg-green-600 dark:bg-green-700"
                                    ></div> :
                                    <div
                                        className="shadow-md rounded-full w-5 h-5 bg-gray-600 dark:bg-gray-300"
                                    ></div>
                            }
                        </div>
                    </div>
                </div>
            </a>
        </Link>

    );
}

export default OperatorCard;