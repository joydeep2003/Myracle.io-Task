import React from 'react';
import ImageUploader from './components/ImageUploader';
import FeatureDescription from './components/FeatureDescription';

function App() {
  return (
    <div className="App">
      <h1>Red Bus Feature Analyzer</h1>
      <ImageUploader />
      <FeatureDescription />
    </div>
  );
}

export default App;
