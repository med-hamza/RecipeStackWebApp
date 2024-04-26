import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../assest/images/loading-food.json';

const Progressbar = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => anim.destroy();
  }, []);

  return <div className="w-28 h-28" ref={animationContainer}></div>;
};

export default Progressbar;
