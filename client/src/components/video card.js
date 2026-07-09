//display one videos title and thumbnail 

import { Link } from "react-router-dom";
import { API_URL } from "../App";

function VideoCard({ video }) {
  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none", color: "white" }}>
      <div style={{ margin: "10px", width: "300px", background: "#181818", padding: "10px", borderRadius: "8px" }}>
        <img 
          src={`${API_URL}/${video.thumbnail}`} 
          alt={video.title} 
          style={{ width: "100%", borderRadius: "8px" }} 
        />
        <h3 style={{ fontSize: "16px", margin: "8px 0 4px" }}>{video.title}</h3>
        <p style={{ fontSize: "14px", color: "gray" }}>{video.channel}</p>
      </div>
    </Link>
  );
}

export default VideoCard;
