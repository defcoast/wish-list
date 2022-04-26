import React, { FC } from 'react';
import './Container.scss';

interface IContainer {
  children: React.ReactNode;
}

const Container: FC<IContainer> = ({ children }) => (
  <div className="container">
    { children }
  </div>
);

export default Container;
