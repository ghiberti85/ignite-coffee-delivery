import styled, { css } from "styled-components";

export const HeroContainer = styled.section`
    width: 90rem;
    padding: 5.75rem 10rem;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 476px;
        height: 360px;
        flex-shrink: 0;
    }
`;

export const HeroContent = styled.div`
    display: block;
`;

export const Title = styled.h1`
    color: ${props=>props.theme['base-title']};
    font: 800 3rem 'Baloo 2', sans-serif;
    font-style: normal;
    line-height: 1.3;
    align-self: stretch;
    max-width: 588px;
    max-height: 124px;
    height: auto;
    margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
    color: ${props=>props.theme['base-subtitle']};
    font: 400 1.25rem Roboto, sans-serif;
    font-style: normal;
    line-height: 1.3;
    align-self: stretch;
    max-width: 588px;
    max-height: 124px;
    margin-bottom: 4.125rem;
`;

export const Features = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 2.25rem;
`;

export const FeatureContainer = styled.span`
    color: ${props=> props.theme['base-text']};
    font: 400 1rem Roboto, sans-serif;
    font-style: normal;
    line-height: 1.3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
`;

interface IconContainerProps {
    variant?: 'yellow-dark' | 'yellow' | 'purple' | 'base-text'
}

export const IconContainer = styled.div<IconContainerProps>`
    background: ${props => props.theme['base-text']};
    border-radius: 999px;

    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    ${props => props.variant === 'yellow-dark' && css`
        background:${props.theme['yellow-dark']};
    `}
    ${props => props.variant === 'yellow' && css`
        background:${props.theme['yellow']};
    `}
    ${props => props.variant === 'purple' && css`
        background:${props.theme['purple']};
    `}
`;