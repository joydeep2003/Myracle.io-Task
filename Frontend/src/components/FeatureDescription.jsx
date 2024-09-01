import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './FeatureDescription.module.css';

function FeatureDescription({ markdownText }) {
  return (
    <div className={styles.featureDescription}>
      <h2 className={styles.featureTitle}>App Features Analysis</h2>
      <div className={styles.featureContent}>
        {markdownText ? (
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        ) : (
          <p className={styles.noFeatures}>No features analyzed yet. Upload screenshots to begin analysis.</p>
        )}
      </div>
    </div>
  );
}

export default FeatureDescription;

