
import { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../components/VideoCard";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get("http://localhost:5000/api/videos");
      setVideos(res.data);
    };
    fetchVideos();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
}

export default Home;
