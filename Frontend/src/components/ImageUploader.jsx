import React, { useState } from 'react';
import axios from 'axios';
import styles from './ImageUploader.module.css';

function ImageUploader({ setMarkdownText }) {
  const [images, setImages] = useState([]);
  const [context, setContext] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (e) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleContextChange = (e) => {
    setContext(e.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image);
    });
    formData.append('context', context);

    try {
      const response = await axios.post('http://localhost:3001/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMarkdownText(response.data);
    } catch (error) {
      console.error('Error:', error);
      setMarkdownText('An error occurred while analyzing the images.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.imageUploader}>
      <label className={styles.fileInputLabel}>
        <input type="file" multiple onChange={handleImageUpload} className={styles.fileInput} />
        <span className={styles.uploadIcon}>📁</span>
        Upload Images
      </label>
      <textarea 
        placeholder="Optional context" 
        value={context} 
        onChange={handleContextChange}
        className={styles.contextInput}
      />
      <button 
        onClick={handleSubmit} 
        disabled={isLoading || images.length === 0}
        className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
      >
        {isLoading ? 'Analyzing...' : 'Describe Features'}
      </button>
      {images.length > 0 && (
        <p className={styles.imageCount}>{images.length} image(s) selected</p>
      )}
    </div>
  );
}

export default ImageUploader;




