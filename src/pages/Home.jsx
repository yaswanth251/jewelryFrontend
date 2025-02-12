import { useState } from "react";
import { BiCamera } from "react-icons/bi";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [results, setResults] = useState([]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedFile(file);

    // Move file to "uploads" directory
    const filePath = `uploads/${file.name}`;
    const reader = new FileReader();

    reader.onload = async () => {
      const response = await window.electronAPI.saveFile(filePath, reader.result);
      if (response.success) {
        console.log("File saved successfully!");

        // Run Python script automatically
        await window.electronAPI.runPythonScript();

        // Fetch results from result.json
        fetch("result.json")
          .then((res) => res.json())
          .then((data) => setResults(data))
          .catch((err) => console.error("Error loading results:", err));
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container">
      <h2>Jewelry Image Search</h2>

      {/* Image Upload Input */}
      <input type="file" accept="image/*" id="imageInput" className="hidden" onChange={handleImageUpload} />
      <label htmlFor="imageInput" className="upload-btn">
        <BiCamera size={24} /> Upload Image
      </label>

      {/* Display Results */}
      {results.length > 0 && (
        <div className="results">
          <h3>Matching Products</h3>
          <div className="grid">
            {results.map((item, index) => (
              <div key={index} className="result-item">
                <img src={item.image} alt={item.category} />
                <p>{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
