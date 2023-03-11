import React, { useContext } from "react";
import './VideoPlayerStyles.css';
import { SocketContext } from "../../SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
 
  return (
  <div className="parent-video">
    {/*My Video */}
    {stream && (
    <div className="video1">
    <h5 className="video-name">{name || 'Name'}</h5>
      <video playsInline ref={myVideo} autoPlay width="400px" height='280px' className="vid" />
    </div>
   
    )}
   
     {
      callAccepted && !callEnded && (
     
    <div className="video2">
    <h5 className="video-name">{call.name || 'Name'}</h5>
      <video playsInline ref={userVideo} autoPlay width="400px" height='280px' className="vid" />
    </div>
    )}
     
  </div>
  );
};

export default VideoPlayer;
