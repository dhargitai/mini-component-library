/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
    small: {
        height: "8px",
        borderRadius: "8px",
        padding: 0,
    },
    medium: {
        height: "12px",
        borderRadius: "8px",
        padding: 0,
    },
    large: {
        height: "24px",
        borderRadius: "4px",
        padding: "4px",
    },
};

const ProgressBackground = styled.div`
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
    height: var(--height);
    padding: var(--padding);
`;
const ProgressIndicator = styled.div`
    background-color: ${COLORS.primary};
    height: 100%;
    width: var(--width);
`;
const ProgressWrapper = styled.div`
    border-radius: var(--border-radius);
    height: 100%;
    overflow: clip;
    width: 100%;
`;

const ProgressBar = ({ value, size }) => {
    const style = STYLES[size];

    if (!["small", "medium", "large"].includes(size)) {
        throw new Error(`Not a valid size parameter: "${size}"`);
    }

    return (
        <>
            <ProgressBackground
                role="progressbar"
                aria-labelledby="loadinglabel"
                aria-valuenow={value}
                style={{ "--height": style.height, "--padding": style.padding }}
            >
                <VisuallyHidden>
                    <span id="loadinglabel">Loading: {value}%</span>
                </VisuallyHidden>
                <ProgressWrapper
                    style={{ "--border-radius": style.borderRadius }}
                >
                    <ProgressIndicator style={{ "--width": value + "%" }} />
                </ProgressWrapper>
            </ProgressBackground>
        </>
    );
};

export default ProgressBar;
