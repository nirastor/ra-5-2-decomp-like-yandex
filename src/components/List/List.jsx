/* eslint-disable react/prop-types */
import React from 'react';
import './List.css';

export default function List({ children, items, className }) {
  return (
    <ul className={className}>
      {children(items)}
    </ul>
  );
}
