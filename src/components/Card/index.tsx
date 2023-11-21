import { ShoppingCart } from "phosphor-react";

import { CardContainer, CoffeeImg, Description, InfoBuy, Order, Price, Tag, Title } from "./styles";
import { useTheme } from "styled-components";
import { QuantityInput } from "../QuantityInput";
import { useState } from "react";

type CoffeeProps = {
    coffee: {
        id: string
        title: string
        description: string
        tags: string[]
        price: number
        image: string
    }
}

export function Card({ coffee }: CoffeeProps) {
    const theme = useTheme();
    const [ quantity, setQuantity] = useState(0);

    function addQuantity() {
        setQuantity(state => state + 1)
    }

    function removeQuantity() {
        if( quantity > 0) {
            setQuantity(state => state - 1)
        }
    }


    return(
        <CardContainer>
            <CoffeeImg src={coffee.image} alt={coffee.title}/>

            <Tag>
                {coffee.tags.map(tag => (
                    <span key={tag}>{ tag }</span>
                ))}
            </Tag>

            <Title>{coffee.title}</Title>
            <Description>
                {coffee.description}
            </Description>
            
            <InfoBuy>
                <Price>
                    <span>R$</span>
                    <span>{coffee.price.toFixed(2)}</span>
                </Price>

                <Order>
                    <QuantityInput
                        quantity={quantity}
                        addQuantity={addQuantity}
                        removeQuantity={removeQuantity}
                    />
                    <button>
                        <ShoppingCart size={22} weight="fill" color={theme.colors['base-card']}/>
                    </button>
                </Order>
            </InfoBuy>
        </CardContainer>
    )
}