import React from "react";

import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options/Options";

const App = () => {
  return (
    <div>
      <Header />
      <VideoPlayer />
      <Options >
        <Notifications />
        </Options>
      
    </div>
  );
};

export default App;
