import { Minus, Plus } from "phosphor-react";
import { QuantityInputContainer } from "./styles";


export function QuantityInput() {
    return(
        <QuantityInputContainer>
            <button>
                <Minus size={14} />
            </button>
            <span>0</span>
            <button>
                <Plus size={14} />
            </button>
        </QuantityInputContainer>
    )
}