import { Minus, Plus } from "phosphor-react";
import { QuantityInputContainer } from "./styles";

type QuantityInputProps = {
    quantity: number;
    addQuantity: () => void;
    removeQuantity: () => void;
}

export function QuantityInput({ 
    quantity, 
    addQuantity, 
    removeQuantity 
}: QuantityInputProps) {
    return(
        <QuantityInputContainer>
            <button onClick={removeQuantity}>
                <Minus size={14} />
            </button>
            <span>{quantity}</span>
            <button onClick={addQuantity}>
                <Plus size={14} />
            </button>
        </QuantityInputContainer>
    )
}