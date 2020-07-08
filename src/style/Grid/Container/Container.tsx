/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react';

import styled from '@emotion/styled';
import { ContainerProps } from './types';
import { BREAKPOINTS } from '../../../constants';
import { media } from '../../media';

const baseStyle = () => css`
    label: container;
    width: 100%;
    max-width: 100%;

    margin-right: auto;
    margin-left: auto;
`

const BaseContainer: FC<ContainerProps> = ({
    style,
    className,
    children,
}) => (
        <div style={style} className={className}>
            {children}
        </div>
    );

const fluidStyle = ({ fluid }: { fluid: boolean }) =>
    !fluid &&
    BREAKPOINTS.map(
        (breakpoint) => css`
            ${media(breakpoint)} {

            }
        `
    )
export default styled(BaseContainer)(
    baseStyle,
    fluidStyle
)