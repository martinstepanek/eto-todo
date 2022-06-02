import React from 'react';
import styled from 'styled-components';
import colors from '../../../../../styles/colors';
import { HeadingSecondary } from '../../../../base/HeadingSecondary';

const ListHeadingSeparator = ({ children, ...props }) => (
  <div {...props}>
    <HeadingSecondary className="heading">{children}</HeadingSecondary>
    <div className="separator" />
  </div>
);

export default styled(ListHeadingSeparator)`
  position: relative;
  margin: 15px;

  .heading {
    position: relative;
    z-index: 1;
    background-color: ${colors.background};
    display: inline-block;
    margin: 0 0 0 15px;
    padding: 10px;
    font-size: 1.1em;
  }

  .separator {
    position: absolute;
    top: calc(50% - 0.5px);
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${colors.text};
  }
`;
