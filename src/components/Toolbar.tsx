import React from 'react';
import { SlideInDown } from 'components/transitions';

export const Toolbar = ({ showing, children }) => {
  return (
    <>
      <SlideInDown timeout={250} mountOnEnter unmountOnExit show={showing}>
        <div className="h-16" />
      </SlideInDown>
      <SlideInDown timeout={300} mountOnEnter unmountOnExit show={showing}>
        <div className="w-full py-3 bg-secondary absolute text-white text-primary">
          <div className="max-w-lg m-auto">{children}</div>
        </div>
      </SlideInDown>
    </>
  );
};