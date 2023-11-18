import { ShoppingCart } from "phosphor-react";
import { CardContainer, Description, Form, Tag, Title } from "./styles";

export function CoffeeCard() {
    return (
        <CardContainer>
            <img src="src/assets/coffee/tradicional.png" alt="" />
            <Tag>TRADICIONAL</Tag>
            <Title>Expresso Tradicional</Title>
            <Description>O tradicional café feito com água quente e grãos moídos</Description>
            <Form>
                <span>R$<strong>9,90</strong></span>
                <div>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
                <button><ShoppingCart size={24} weight="fill" /></button>
            </Form>
        </CardContainer>
    )
}