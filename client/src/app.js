
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import LoginPage from "./pages/LoginPage";
import UploadPage from "./pages/uploadPage";
const API_URL = "https://youtube-clone-1h0h.onrender.com";
export { API_URL }; // ye isliye taki Home.js aur VideoCard me use ho jaye

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Upload" element={<UploadPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
