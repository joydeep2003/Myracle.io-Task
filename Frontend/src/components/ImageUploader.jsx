import React, { useState } from 'react';
import axios from 'axios';

function ImageUploader() {
  const [images, setImages] = useState([]);
  const [context, setContext] = useState('');

  const handleImageUpload = (e) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleContextChange = (e) => {
    setContext(e.target.value);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image); // Change this line
    });
    formData.append('context', context);

    try {
      const response = await axios.post('http://localhost:3001/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.data);
      // Update FeatureDescription component with the response
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageUpload} />
      <textarea 
        placeholder="Optional context" 
        value={context} 
        onChange={handleContextChange}
      />
      <button onClick={handleSubmit}>Describe Features</button>
    </div>
  );
}

export default ImageUploader;
