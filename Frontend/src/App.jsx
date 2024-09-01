// import React from 'react';
// import ImageUploader from './components/ImageUploader';
// // import FeatureDescription from './components/FeatureDescription';

// function App() {
//   return (
//     <div className="App">
//       <h1>Red Bus Feature Analyzer</h1>
//       <ImageUploader />
//       {/* <FeatureDescription /> */}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import FeatureDescription from './components/FeatureDescription';
import styles from './App.module.css';

function App() {
  const [markdownText, setMarkdownText] = useState(null);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>App Feature Analyzer</h1>
      <div className={styles.content}>
        <ImageUploader setMarkdownText={setMarkdownText} />
        <FeatureDescription markdownText={markdownText} />
      </div>
    </div>
  );
}

export default App;
