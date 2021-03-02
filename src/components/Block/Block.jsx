/* eslint-disable react/prop-types */
import React from 'react';

export default function Block({
  image, title, children, className,
}) {
  return (
    <div className={className}>
      {image && <img className="block-image" src={image} alt={image} />}
      <h2 className="block-title">{title}</h2>
      <div>
        {children}
      </div>
    </div>
  );
}
