import React from 'react';
import Lottie from 'react-lottie';

import animationData from './loading.json';

interface Props {
  width?: number;
  height?: number;
}

const Loading: React.FC<Props> = ({ width = 500, height = 500 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} width={width} height={height} />
    </div>
  );
};

export default Loading;
