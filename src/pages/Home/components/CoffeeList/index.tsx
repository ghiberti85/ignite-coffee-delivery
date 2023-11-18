
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer } from "./styles";

export function CoffeeList() {
    return (
        <CoffeeListContainer>
            <h2>Nossos cafés</h2>
            <CoffeeCard />
        </CoffeeListContainer>
    )
}