// Parallax.jsx
import React, { useEffect, useState } from 'react';
import "./Parrallax.css"

const Parallax = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax-bg" style={{ transform: `translateY(${offset * 0.5}px)` }}>
      </div>
    </div>
  );
};

export default Parallax;
