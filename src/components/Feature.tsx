// Feature.tsx
import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Feature;
