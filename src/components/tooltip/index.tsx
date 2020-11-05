import React from 'react';

const Tooltip: React.FC<{
  text: string;
  className: string;
  top: number;
  left: number;
}> = ({ text, className, top, left }) => {
  return (
    <div className={className} style={{ top: `${top}px`, left: `${left}px` }}>
      {text}
    </div>
  );
};

export default Tooltip;
