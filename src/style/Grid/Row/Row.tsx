/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react';

import styled from '@emotion/styled';
import { RowProps } from '../../types';


const BaseRow: FC<RowProps> = ({
    style,
    className,
    children,
}) => (
        <div style={style} className={className}>
            {children}
        </div>
    );

export default styled(BaseRow)<RowProps>(

);