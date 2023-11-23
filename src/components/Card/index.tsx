import { CheckFat, ShoppingCart } from '@phosphor-icons/react'

import { CardContainer, CoffeeImg, Description, InfoBuy, Order, Price, Tag, Title } from "./styles";
import { useTheme } from "styled-components";
import { QuantityInput } from "../QuantityInput";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";

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
    const [ isItemAdded, setIsItemAdded] = useState(false)
    const { addItem } = useCart()

    function addQuantity() {
        setQuantity(state => state + 1)
    }

    function removeQuantity() {
        if( quantity > 0) {
            setQuantity(state => state - 1)
        }
    }

    function handleAddItem() {
        addItem({ id: coffee.id, quantity })
        setIsItemAdded(true)
        setQuantity(1)
    }

    useEffect(() =>{
        let timeout: number
        
        if (isItemAdded) {
            timeout = setTimeout(() => {
                setIsItemAdded(false)
            }, 10000)
        }

        return () => {
            if(timeout) {
                clearTimeout(timeout)
            }
        }
    }, [isItemAdded])


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
                    <button disabled={isItemAdded} onClick={handleAddItem}>
                        {isItemAdded ? (
                            <CheckFat 
                                weight="fill"
                                size={22}
                                color={theme.colors['base-card']}
                            /> 
                        ) : (
                            <ShoppingCart
                                weight="fill" 
                                size={22}
                                color={theme.colors['base-card']}                                    
                            />
                        )}
                    </button>
                </Order>
            </InfoBuy>
        </CardContainer>
    )
}