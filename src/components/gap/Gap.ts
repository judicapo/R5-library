import styled, { css } from 'styled-components';
import { GapProps } from './types';

export const Gap = styled.div<GapProps>`
  ${({ size, isVertical }) => css`
    ${isVertical ? `
      width: ${size ? `${size}` : 0}px;
      height: 100%;
      @media only screen and (min-width: 320px) and (max-width: 1023px) {
        width: 6%;
        max-width: ${size ? `${size}` : 0}px;
      }
    `: `
      height: ${size ? `${size}` : 0}px;
      width: 100%;
    `}
  `}
`;
