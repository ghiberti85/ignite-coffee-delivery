import { ShoppingCart } from "phosphor-react";

import coffeeImg from '../../assets/coffee/tradicional.png';

import { CardContainer, CoffeeImg, Description, InfoBuy, Order, Price, Tag, Title } from "./styles";
import { useTheme } from "styled-components";
import { QuantityInput } from "../QuantityInput";

export function Card() {
    const theme = useTheme();
    return(
        <CardContainer>
            <CoffeeImg src={coffeeImg} />

            <Tag>
                <span>Tradicional</span>
            </Tag>

            <Title>Expresso Tradicional</Title>
            <Description>
                O tradicional café feito com água quente e grãos moídos
            </Description>
            
            <InfoBuy>
                <Price>
                    <span>R$</span>
                    <span>9,90</span>
                </Price>

                <Order>
                    <QuantityInput />
                    <button>
                        <ShoppingCart size={22} weight="fill" color={theme.colors['base-card']}/>
                    </button>
                </Order>
            </InfoBuy>
        </CardContainer>
    )
}