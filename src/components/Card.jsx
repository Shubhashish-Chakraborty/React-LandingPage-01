export const Card = ({ imgURLleft, imgURLright }) => {
    return (
        <div className="flex flex-col items-center bg-gray-100 pt-10">
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 w-11/12 md:w-96">
                    <img
                        src={imgURLleft}
                        alt="Placeholder"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">View</button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Register</button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 w-11/12 md:w-96">
                    <img
                        src={imgURLright}
                        alt="Placeholder"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">View</button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
