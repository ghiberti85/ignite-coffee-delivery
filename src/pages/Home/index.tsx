import { HomeContainer } from "./styles";
import { HeroSection } from './components/HeroSection'
import { CoffeeList } from "./components/CoffeeList";

export function Home() {
    return(
        <HomeContainer>
            <HeroSection />
            <CoffeeList />
        </HomeContainer>  
    );
}