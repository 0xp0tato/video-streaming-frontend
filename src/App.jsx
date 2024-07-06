import React, { useState } from "react";
import AWS from "aws-sdk";

const App = () => {
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoUpload = (event) => {
    setVideoFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <main className="flex h-screen">
      <section className="w-1/2 flex flex-col items-center justify-center border-r-2 border-gray-300 p-4">
        <div className="mb-4">
          {videoFile ? (
            <video controls className="w-full h-auto">
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
              <span className="text-gray-500">No video uploaded</span>
            </div>
          )}
        </div>
        <form>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </form>
      </section>
      <section className="w-1/2 flex flex-col items-center justify-center p-4 overflow-y-scroll">
        <h1 className="text-2xl font-bold mb-4">About Our Site</h1>
        <p className="text-gray-700 text-center">
          Welcome to our site! We offer a platform for uploading and viewing
          videos. Feel free to upload your own video using the upload button on
          the left. Our site is designed to be user-friendly and efficient,
          providing you with the best experience possible.
        </p>
      </section>
    </main>
  );
};

export default App;
