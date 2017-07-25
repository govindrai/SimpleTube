import React from "react";

const VideoList = props =>
  <ul className="col-md-4 list-group">
    {props.videos.length}
  </ul>;

export default VideoList;
