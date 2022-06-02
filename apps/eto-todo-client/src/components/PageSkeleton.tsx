import React, { FC } from 'react';
import styled from 'styled-components';
import { Heading } from './base/Heading';

const PageSkeleton: FC = props => {
  return (
    <div {...props}>
      <div className="heading">
        <Heading>Eto Todo</Heading>
      </div>
    </div>
  );
};

export default styled(PageSkeleton)`
  height: 100vh;
  overflow: hidden;

  .heading {
    height: 40vh;
    text-align: center;
    padding-top: 60px;
  }
`;
