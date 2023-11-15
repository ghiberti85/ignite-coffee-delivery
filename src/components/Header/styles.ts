import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    padding: 2rem 10rem;
    justify-content: space-between;
    align-items: center;
    width: 90rem;
`;

export const HeaderContent = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
`;

export const LocationText = styled.p`
    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
    border-radius: 6px;

    display: flex;
    padding: 0.75rem;
    justify-content: center;
    align-items: center;
    gap: 4px;    
`;

export const ShoppingIcon = styled.div`
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    padding: 0.60rem;
    border-radius: 6px;
    cursor: pointer;
`;