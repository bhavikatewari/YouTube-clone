
import { useState } from "react";
import axios from "axios";

function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("video", file);

    try {
      await axios.post("http://localhost:5000/api/videos", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Video uploaded!");
    } catch (error) {
      alert("Upload failed");
    }
  };

  return (
    <form onSubmit={handleUpload} style={{ padding: "20px", maxWidth: "300px" }}>
      <h2>Upload Video</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "10px" }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "10px" }}
      />
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ display: "block", marginBottom: "10px" }}
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadPage;
