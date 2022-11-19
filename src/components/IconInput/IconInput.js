import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Input = styled.input`
  padding: ${p => p.size === 'large'
    ? '6px 0 6px 28px'
    : '6px 0 4px 22px'};
  font-size: ${p => p.size === 'large' ? 18 : 14}px;
  border: 0;
  border-bottom: ${p => p.size === 'large' ? 2 : 1}px solid black;
  width: 100%;
  font-weight: 700;
  color: ${COLORS.gray700};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`
const Wrapper = styled.div`
  position: relative;
  width: ${p => p.width}px;

  &:hover {
    svg, input {
      color: ${COLORS.black};
    }
  }
`
const InputIcon = styled(Icon)`
  position: absolute;
  bottom: ${p => p.componentSize === 'large' ? 7 : 5}px;
  color: ${COLORS.gray700};
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const inputRef = React.useRef(null)

  return <>
  <VisuallyHidden>
    <label htmlFor='search-input'>{label}</label>
  </VisuallyHidden>
  <Wrapper size={size} width={width}>
    <InputIcon id={icon} componentSize={size} size={size === 'large' ? 22 : 16 } onClick={() => inputRef.current.focus()} />
    <Input placeholder={placeholder} size={size} id="search-input" ref={inputRef} />
  </Wrapper>
  </>
};

export default IconInput;
