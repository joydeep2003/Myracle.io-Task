import React from 'react';

function FeatureDescription({ features }) {
  return (
    <div>
      <h2>Feature Descriptions</h2>
      {features && features.map((feature, index) => (
        <div key={index}>
          <h3>{feature.name}</h3>
          <p>Functionality: {feature.functionality}</p>
          <p>User Interactions: {feature.userInteractions}</p>
          <p>Edge Cases: {feature.edgeCases}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureDescription;
