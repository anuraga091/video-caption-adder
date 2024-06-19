import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl, captions }) => {
  const [currentCaption, setCurrentCaption] = useState('');

  const handleProgress = (state) => {
    const currentTime = state.playedSeconds;
    const caption = captions.find(
      ({ startTime, endTime }) => currentTime >= startTime && currentTime <= endTime
    );
    setCurrentCaption(caption ? caption.text : '');
  };

  return (
    <div className="relative mt-6">
      <ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        height="500px" // Increase the height here
        className="rounded-lg shadow-md"
        onProgress={handleProgress}
      />
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2  text-white px-4 py-2 text-lg rounded">
        {currentCaption}
      </div>
    </div>
  );
};

export default VideoPlayer;
