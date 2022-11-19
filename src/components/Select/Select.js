import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

const Wrapper = styled.div`
    display: flex;
    position: relative;
    border-radius: 8px;
    background-color: ${COLORS.transparentGray15};
    width: fit-content;
    padding: 6px 12px 6px 16px;
    align-items: center;
    gap: 18px;
    color: ${COLORS.gray700};

    &:hover {
        color: ${COLORS.black};
    }

    .label {
        display: block;
    }
`;
const SelectElement = styled.select`
    opacity: 0;
    position: absolute;
    margin-left: -16px;
    width: 100%;
    height: 100%;
`;

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);
    const selectRef = React.useRef(null);

    return (
        <>
            <VisuallyHidden>
                <label htmlFor={`select-${label}`}>{label}</label>
            </VisuallyHidden>
            <Wrapper tabIndex={0}>
                <SelectElement
                    value={value}
                    onChange={onChange}
                    id={`select-${label}`}
                    ref={selectRef}
                >
                    {children}
                </SelectElement>
                <span className="label" aria-hidden="true">
                    {displayedValue}
                </span>
                <Icon id="chevron-down" aria-hidden="true" />
            </Wrapper>
        </>
    );
};

export default Select;
