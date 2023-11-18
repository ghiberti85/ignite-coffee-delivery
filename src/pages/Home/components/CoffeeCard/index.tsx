import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CardContainer, Description, Form, Quantity, ShopInputs, Tag, Title } from "./styles";
import { useState } from "react";


export function CoffeeCard() {
    const [quantity, setQuantity] = useState(0);

    function addQuantity() {
        setQuantity((state: number) =>{
            return state < 9 ? state + 1 : state
        })
    }

    function removeQuantity() {
        setQuantity((state: number) =>{
            return state > 0 ? state - 1 : state
        })
    }

    return (
        <CardContainer>
            <img src="src/assets/coffee/tradicional.png" alt="" />
            <Tag>TRADICIONAL</Tag>
            <Title>Expresso Tradicional</Title>
            <Description>O tradicional café feito com água quente e grãos moídos</Description>
            <Form>
                <span>R$<strong>9,90</strong></span>
                <ShopInputs>
                    <Quantity>
                        <Minus size={14} color="purple"type="button" onClick={removeQuantity} />
                        <input type="number" disabled step={1} value={quantity} />
                        <Plus size={14} color="purple" type="button" onClick={addQuantity} />
                    </Quantity>
                    <button type="submit"><ShoppingCart size={24} weight="fill" color="#fff" /></button>
                </ShopInputs>
            </Form>
        </CardContainer>
    )
}