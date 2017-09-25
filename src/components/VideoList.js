import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, updateSelectedVideoHandler }) => (
  <ul className="col-md-4 list-group">
    {videos.map(video => {
      return (
        <VideoListItem
          updateSelectedVideoHandler={updateSelectedVideoHandler}
          key={video.etag}
          video={video}
        />
      );
    })}
  </ul>
);

export default VideoList;
