import React from 'react';

interface BackIconProps {
  className?: string; 
  width?: string;
  height?: string;
}

const BackIcon: React.FC<BackIconProps> = ({
  className = '',
  width = "800px",
  height = "800px"
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 52 52"
      xmlns="http://www.w3.org/2000/svg"

    >
      <g>
        <path d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z" />
      </g>
    </svg>
  );
};

export default BackIcon;