import React from 'react';

// eslint-disable-next-line react/prop-types
export default function ListItem({ children, className }) {
  return (<li className={className}>{children}</li>);
}
