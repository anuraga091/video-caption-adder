import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import CaptionForm from './components/CaptionForm';

const App = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);

  const handleVideoUrlChange = (url) => {
    setVideoUrl(url);
  };

  const handleAddCaption = (caption) => {
    setCaptions([...captions, caption]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Video Caption App</h1>
      <CaptionForm onVideoUrlChange={handleVideoUrlChange} onAddCaption={handleAddCaption} />
      {videoUrl && <VideoPlayer videoUrl={videoUrl} captions={captions} />}
    </div>
  );
};

export default App;
