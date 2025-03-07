import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const VideoPlayer = () => {
  const videoSrc = "/assets/videos/floor.mp4";
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative w-full h-auto aspect-video">
        <video
          ref={videoRef}
          className="w-full h-full rounded-xs object-cover"
          onClick={togglePlay}
          src={videoSrc}
          onEnded={() => setIsPlaying(false)}
        />
        {/* Play/Pause Button (Middle-Bottom of Video) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="p-4 bg-white rounded-full hover:bg-gray-300 transition"
          >
            {isPlaying ? (
              <FaPause className="text-black text-2xl" />
            ) : (
              <FaPlay className="text-black text-2xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
