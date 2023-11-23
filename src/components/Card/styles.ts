import { styled } from "styled-components"
import { mixins } from '../../styles/mixins'


export const CardContainer = styled.div`
    background-color: ${({ theme }) => theme.colors['base-card']};
    padding: 0 20px 20px;
    border-radius: 6px 36px;
    width: 256px;

    display: flex;
    flex-direction: column;

    text-align: center
`

export const CoffeeImg = styled.img`
    margin: -20px auto 0;
    max-width: 120px;
    max-height: 120px;
`

export const Tag = styled.div`
    margin-top: 12px;

    display: flex;
    align-items: center;
    align-self: center;
    gap: 4px;

    span {
        padding: 4px 8px;
        border-radius: 100px;
        background-color: ${({ theme }) => theme.colors['yellow-light']};
        color: ${({ theme }) => theme.colors['yellow-dark']};
        text-transform: uppercase;
        ${mixins.fonts.tag}
    }
`
export const Title = styled.h3`
    margin-top: 16px;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    ${mixins.fonts.titleS}
`

export const Description = styled.span`
    margin-top: 8px;
    width: 100%;

    color: ${({ theme }) => theme.colors['base-label']};
    ${mixins.fonts.textS}
`

export const InfoBuy = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 32px;
`

export const Price = styled.div`
    display: flex;
    align-items: baseline;
    gap: 2px;

    span:first-child {
        ${mixins.fonts.textS};
        color: ${({ theme }) => theme.colors['base-text']};
    }

    span:last-child {
        ${mixins.fonts.titleM};
        color: ${({ theme }) => theme.colors['base-text']};
        font-weight: bold;
    }
`
export const Order = styled.div<{ $itemAdded?: boolean}>`
    display: flex;
    align-items: center;
    gap: 8px;

    button {
        display: flex;
        padding: 8px;
        border-radius: 6px;
        background-color: ${({ theme, $itemAdded }) =>
            $itemAdded ? theme.colors['yellow-dark'] : theme.colors['purple-dark']};
        transition: background-color 0.2s;

        &:hover {
            background-color: ${({ theme, $itemAdded }) =>
                $itemAdded ? theme.colors.yellow : theme.colors.purple};
        }
    }
`
