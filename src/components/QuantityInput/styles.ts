import { styled } from "styled-components";


export const QuantityInputContainer = styled.div`
    padding: 8px;
    background-color: ${({ theme }) => theme.colors['base-button']};
    border-radius: 6px;

    display: flex;
    gap: 4px;

    button {
        background-color: transparent !important;
        display: flex;
        align-items: center;
    }

    svg {
        color: ${({ theme }) => theme.colors['purple']};

        transition: all 0.2s;

        &:hover {
            color: ${({ theme }) => theme.colors['purple-dark']};
        }
    }

    span {
        padding-top: 5px;
        color: ${({ theme }) => theme.colors['base-title']};
    }
`