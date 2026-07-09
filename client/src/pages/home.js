
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../App";
import VideoCard from "../components/VideoCard";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      // Isko ye bana de
const res = await axios.get(`${API_URL}/api/videos`);
      setVideos(res.data);
    };
    fetchVideos();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "Wrap", padding: "20px" }}>
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
}

export default Home;
