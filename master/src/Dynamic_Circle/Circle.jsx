import React, { useState } from 'react';
import './circle.css';

function Circle() {
  const [labelSize, setLabelSize] = useState(20); // Initial size of label
  const circleSize = labelSize * 2; // Calculate circle size based on label size

  const handleLabelSizeChange = (e) => {
    setLabelSize(parseInt(e.target.value)); // Update label size when input changes
  };

  return (
    <div className="Circle">
      <label htmlFor="labelSizeInput">Label Size:</label>
      <input
        type="number"
        id="labelSizeInput"
        value={labelSize}
        onChange={handleLabelSizeChange}
      />
      <div className="circle" style={{ width: circleSize, height: circleSize }}>
        <span className="label" style={{ fontSize: labelSize }}>{labelSize}</span>
      </div>
    </div>
  );
}

export default Circle;
