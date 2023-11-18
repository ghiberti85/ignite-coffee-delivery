import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 256px;
    height: 310px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 6px 36px;
    background: ${props => props.theme['base-card']};
    
    img {
        width: 120px;
        height: 120px;
        flex-shrink: 0;
        margin: auto;
    }
`;

export const Tag = styled.span`
    font: 700 0.75rem Roboto, sans-serif;
    font-style: normal;
    line-height: 1.3;
    text-transform: uppercase;
    color: ${props => props.theme['yellow-dark']};
    background: ${props => props.theme['yellow-light']};
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    width: 40%;
    margin: 0.75rem auto 1rem;
`;

export const Title = styled.h4`
    font: 700 1.25rem 'Baloo 2', sans-serif;
    font-style: normal;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};
`;

export const Description = styled.p`
    text-align: center;
    font: 400 0.875rem Roboto, sans-serif;
    font-style: normal;
    line-height: 1.3;
    color: ${props => props.theme['base-label']};
    padding: 0.5rem 1.25rem 1.75rem;

`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem 1.25rem;

    span {
        font: 400 0.875rem Roboto, sans-serif;
    }
    strong {
        font: 800 1.5rem 'Baloo 2', sans-serif;
    }
`;