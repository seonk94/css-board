/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react';

import styled from '@emotion/styled';
import { ContainerProps } from './types';

const baseStyle = () => css`
    label: container;
    width: 100%;

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

export default styled(BaseContainer)((props) => (
    baseStyle
))