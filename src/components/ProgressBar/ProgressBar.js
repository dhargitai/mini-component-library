/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBackground = styled.div`
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
    border-radius: 8px;
    background-color: ${COLORS.transparentGray15};
    height: ${p => {
      if (p.size === 'large') {
        return 24;
      } else if (p.size === 'medium') {
        return 12;
      }
      return 8;
    }}px;
    padding: ${p => p.size === 'large' ? '4px' : ''};
`;
const ProgressIndicator = styled.div`
  width: ${p => p.value}%;
  background-color: ${COLORS.primary};
  height: 100%;
  border-radius: 4px${p => p.value !== 100 ? ' 0 0 4px' : ''};
`;

const ProgressBar = ({ value, size }) => {
    return (
        <>
            <VisuallyHidden>
                <span id="loadinglabel">Loading:</span>
            </VisuallyHidden>
            <ProgressBackground
                role="progressbar"
                aria-labelledby="loadinglabel"
                aria-valuenow={value}
                size={size}
            >
                <ProgressIndicator value={value} />
            </ProgressBackground>
        </>
    );
};

export default ProgressBar;
