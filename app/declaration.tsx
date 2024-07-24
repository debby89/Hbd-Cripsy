// declaration

declare module 'react-rain-animation' {
    import React from 'react';
  
    interface RainAnimationProps {
      numDrops?: string;
    }
  
    const RainAnimation: React.FC<RainAnimationProps>;
    export default RainAnimation;
  }
