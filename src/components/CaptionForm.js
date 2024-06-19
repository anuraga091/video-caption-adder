import React, { useState } from 'react';

const CaptionForm = ({ onVideoUrlChange, onAddCaption }) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [captionText, setCaptionText] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleAddCaption = (e) => {
    e.preventDefault();
    onAddCaption({ text: captionText, startTime: parseFloat(startTime), endTime: parseFloat(endTime) });
    setCaptionText('');
    setStartTime('');
    setEndTime('');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={(e) => {
            setVideoUrl(e.target.value);
            onVideoUrlChange(e.target.value);
          }}
          className="block w-full mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Enter caption text"
          value={captionText}
          onChange={(e) => setCaptionText(e.target.value)}
          className="block w-full mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Start time (seconds)"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="block w-1/2 mr-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="End time (seconds)"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="block w-1/2 ml-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button onClick={handleAddCaption} className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
        Add Caption
      </button>
    </div>
  );
};

export default CaptionForm;
