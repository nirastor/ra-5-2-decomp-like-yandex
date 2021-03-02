import React from 'react';
import './Banner.css';

// eslint-disable-next-line react/prop-types
export default function Banner({ src, alt, href }) {
  return (
    <a className="banner-link" href={href}>
      <img className="banner-img" src={src} alt={alt} />
    </a>
  );
}
