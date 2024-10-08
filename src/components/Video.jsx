export const Video = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-20">
            <h1 className="text-4xl font-bold mb-8 text-center cursor-pointer transition-transform transform hover:scale-110">Introduction to The Course:</h1>
            <video className="w-full max-w-2xl" controls>
                <source src="/Video02.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};
