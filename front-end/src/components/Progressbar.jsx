import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../assest/images/loading-food.json';

const Progressbar = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current, // the container element
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData, // the animation data
    });

    return () => anim.destroy(); // Clean up function to stop and dispose of the animation instance
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return <div className="w-28 h-28" ref={animationContainer}></div>;
};

export default Progressbar;
