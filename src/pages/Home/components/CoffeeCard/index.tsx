import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CardContainer, Description, Form, Quantity, ShopInputs, Tag, Title } from "./styles";

export function CoffeeCard() {
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
                        <Minus size={14} color="purple"/>
                        <span>1</span>
                        <Plus size={14} color="purple" />
                    </Quantity>
                    <button><ShoppingCart size={24} weight="fill" color="#fff" /></button>
                </ShopInputs>
            </Form>
        </CardContainer>
    )
}