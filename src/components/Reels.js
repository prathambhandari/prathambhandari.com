import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const reels = [
    { url: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Reel 1", poster: "https://via.placeholder.com/300x533?text=Reel+1" },
    { url: "https://www.w3schools.com/html/movie.mp4", title: "Reel 2", poster: "https://via.placeholder.com/300x533?text=Reel+2" },
    { url: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Reel 3", poster: "https://via.placeholder.com/300x533?text=Reel+3" },
    { url: "https://www.w3schools.com/html/movie.mp4", title: "Reel 4", poster: "https://via.placeholder.com/300x533?text=Reel+4" },
    { url: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Reel 5", poster: "https://via.placeholder.com/300x533?text=Reel+5" },
    { url: "https://www.w3schools.com/html/movie.mp4", title: "Reel 6", poster: "https://via.placeholder.com/300x533?text=Reel+6" },
];

function Reels() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(false); // Mute state
    const videoRefs = useRef(reels.map(() => React.createRef()));

    const showNext = () => {
        if (currentIndex < reels.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Loop back to the first reel if we reach the last one
        }
    };

    const showPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(reels.length - 1); // Loop back to the last reel if we reach the first one
        }
    };

    const toggleMute = () => {
        const updatedMute = !isMuted;
        setIsMuted(updatedMute);

        // Toggle mute for all videos
        videoRefs.current.forEach((videoRef) => {
            videoRef.current.muted = updatedMute;
        });
    };

    return (
        <div className="flex flex-col items-center bg-black p-10 relative w-full">
            <h1 className="text-3xl font-semibold text-white mb-6">My Reels</h1>
            
            <div className="relative w-full max-w-5xl flex items-center">
                {/* Left Arrow (Outside) */}
                <button 
                    onClick={showPrevious} 
                    className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-md hover:bg-gray-700 transition hidden md:block z-10"
                >
                    <FaArrowLeft size={24} />
                </button>

                {/* Reels Container */}
                <div className="flex space-x-4 w-full overflow-hidden">
                    {reels.slice(currentIndex, currentIndex + 3).map((reel, index) => (
                        <div key={index} className="relative w-[calc(33.33%-1rem)] h-[533px] flex-shrink-0 bg-black rounded-lg overflow-hidden shadow-lg">
                            
                            {/* Video Element */}
                            <video 
                                ref={videoRefs.current[index]}
                                src={reel.url} 
                                className="w-full h-full object-cover rounded-lg"
                                poster={reel.poster}  // Video thumbnail when not playing
                                autoPlay
                                loop
                                muted={isMuted}  // Mute state controlled here
                                onClick={() => toggleMute()}  // Toggle mute when clicked
                                controls={false} // Hides default controls
                            />

                            {/* Custom Play Bar (styled as border) */}
                            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-500 rounded-full p-1">
                                <div className="h-full bg-blue-600 rounded-full"></div> {/* Static progress bar */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow (Outside) */}
                <button 
                    onClick={showNext} 
                    className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-md hover:bg-gray-700 transition hidden md:block z-10"
                >
                    <FaArrowRight size={24} />
                </button>
            </div>

            {/* Mute/Unmute Button */}
            <button
                onClick={toggleMute}
                className="absolute bottom-5 right-5 p-3 bg-gray-800 rounded-full shadow-md text-white hover:bg-gray-700 transition"
            >
                {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
            </button>
        </div>
    );
}

export default Reels;
