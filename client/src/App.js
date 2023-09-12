import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [imageURL, setImage] = useState("");

  const createImg = async () => {
    const response = await axios.post("https://chatgpt-image.onrender.com/create", {
      prompt,
    });
    setImage(response.data);
  };

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };
  return (
    <div className="container-fluid">
      <div className="form">
        <h1>Create Your Art!</h1>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter your image description"
        />
        <button type="submit" className="btn btn-primary" onClick={createImg}>
          Submit
        </button>
       
        {imageURL && imageURL?.map((image,index) =>(
          <img key={index} src={image.url} height="200" width="200"/>
        ))}
      </div>
    </div>
  );
}

export default App;