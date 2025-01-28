import React from "react";

type VideoPlayerProps = {
  videoSrc: string;
  children: React.ReactNode;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, children }) => (
  <div className="flex flex-col items-center">
    <video className="w-full max-w-6xl rounded-lg" controls src={videoSrc} />
    {children}
  </div>
);

export default VideoPlayer;
