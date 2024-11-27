import React from 'react';

const ShootingStars = () => {
    return (
      <div className="stars">
        {[...Array(100)].map((_, i) => (
          <div
            className="star"
            key={i}
            style={{
              '--star-tail-length': `${6 + Math.random() * 3}em`,
              '--top-offset': `${Math.random() * 800}vh`,
              '--fall-duration': `${Math.random() * (80 - 10) + 15}s`,
              '--fall-delay': `${Math.random() * (15 - 0)}s`
            }}
          />
        ))}
      </div>
    );
  };

export default ShootingStars;