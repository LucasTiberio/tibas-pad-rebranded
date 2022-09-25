import styled from "styled-components";
import { iBulletPointCursorAttributes } from "./interface";

export const StyledBulletPointCursor = styled.div<iBulletPointCursorAttributes>`
    width: 8px;
    height: 8px;
    border: 1px solid white;
    background-color: ${({ theme }) => theme.colors.DARK};
    border-radius: 50%;

    transition-duration: 90ms;
    transition-timing-function: ease-out;
    pointer-events: none;
    
    display: ${({ x, y }) => (!!x && !!y) ? 'block' : 'none'};
    
    position: absolute;
    transform: ${({ x, y}) => `translate3d(${x-4}px, ${y-3}px, 0)`};

    z-index: 99999 !important;
`