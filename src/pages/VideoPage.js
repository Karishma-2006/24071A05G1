import React from "react";
import { useParams } from "react-router-dom";

function VideoPage() {
  const { id } = useParams();

  return (
    <div className="container">
      <div className="card">
        <h2>Course Video {id}</h2>
        <video width="100%" controls>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default VideoPage;