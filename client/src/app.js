
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import LoginPage from "./pages/LoginPage";
import UploadPage from "./pages/uploadPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <route path="/Upload" element={<UploadPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
