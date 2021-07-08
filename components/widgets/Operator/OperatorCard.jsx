import Avatar from '@material-ui/core/Avatar';
import Link from 'next/link';

const OperatorCard = (props) => {

    const { url, operatorName, operatorProfile, operatorProfileImage, isOperatorOnline } = props;
    const profilePicture = operatorProfileImage.src;

    return (
        <Link href={url}>
            <a>
                <div
                    className={isOperatorOnline ? "m-4 cursor-pointer border border-solid hover:border-green-400 hover:shadow-md " : "m-4 cursor-pointer border border-solid hover:border-gray-400 hover:shadow-md "}
                >
                    <div className="bg-white p-2 mx-auto flex flex-row justify-around items-center">
                        <div
                            className={
                                isOperatorOnline ?
                                    "bg-white m-4 border border-solid border-green-500 rounded-full" :
                                    "bg-white m-4 border border-solid border-gray-500 rounded-full"
                            }
                        >
                            <Avatar src={profilePicture} />
                        </div>
                        <div className="flex flex-col justify-between items-center">
                            <div>
                                <h1 className="text-gray-900 font-bold text-center text-xl uppercase">{operatorName}</h1>
                            </div>
                            <div className="">
                                <p className="font-normal text-base text-justify">
                                    {operatorProfile}
                                </p>
                            </div>
                        </div>
                        <div className="pl-4 w-40 ">
                            {
                                isOperatorOnline ?
                                    <div className="shadow-md rounded-full w-5 h-5 bg-green-600"></div> :
                                    <div className="shadow-md rounded-full w-5 h-5 bg-gray-600"></div>
                            }
                        </div>
                    </div>
                </div>
            </a>
        </Link>

    );
}

export default OperatorCard;