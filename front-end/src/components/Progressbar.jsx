import React from "react";
import Lottie from 'react-lottie';
import animationData from '../assest/images/loading-food.json'

const Progressbar = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return <div className=" w-28 h-28"> <Lottie options={defaultOptions} /></div>;
};

export default Progressbar;
