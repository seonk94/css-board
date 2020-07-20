import React, { ReactChild } from 'react'
import styled from 'styled-components';

interface ButtonProps {
    children: ReactChild
}
const StyledButton = styled.button`
    border: 1px solid black;
    border-radius: 4px;
    height: 36px;
    min-width: 64px;
    display: inline-block;
    justify-content: center;
    flex: 0 0 auto;
    position: relative;
    background: white;
    cursor: pointer;
    margin: 4px;
    &:hover {
        background: #ddd;
    }
`

const ButtonContent = styled.span`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    font-weight: 600;
    font-size: 14px;
`
function Button({ children }: ButtonProps) {

    return (
        <StyledButton>
            <ButtonContent>
                {children}
            </ButtonContent>
        </StyledButton>
    )
}

export default Button;