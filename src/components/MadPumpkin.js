import React from 'react';
import Lottie from 'react-lottie';
import madPumpkinData from '../shared/lottie/mad-pumpkin.json';

function MadPumpkin() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: madPumpkinData
  };

  return <Lottie options={defaultOptions} height={50} width={50} />;
}

export { MadPumpkin };
