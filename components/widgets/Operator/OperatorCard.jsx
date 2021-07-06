import Image from 'next/image';

const OperatorCard = (props) => {
    const { operatorId, operatorName, operatorProfile, operatorProfileImage, isOperatorOnline } = props;

    const handleItemClick = () => {
        console.log("The clicked items id is >>>>  ", operatorId);
    }

    return (
        <div
            className={isOperatorOnline ? "m-4 cursor-pointer border border-solid hover:border-green-400 hover:shadow-md " : "m-4 cursor-pointer border border-solid hover:border-gray-400 hover:shadow-md "}
            onMouseDown={handleItemClick}>
            <div className="bg-white p-2 mx-auto flex flex-row justify-around items-center">
                <div className="bg-white w-full h-full flex justify-center items-center">
                    <Image src={operatorProfileImage} width={150} height={150} alt="graphics" />
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
                            <div className="shadow-md rounded-full w-10 h-10 bg-green-600"></div> : <div className="shadow-md rounded-full w-10 h-10 bg-gray-600"></div>
                    }
                </div>
            </div>
        </div>
    );
}

export default OperatorCard;