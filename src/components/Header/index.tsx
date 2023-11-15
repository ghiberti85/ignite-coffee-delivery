import { HeaderContainer, HeaderContent, LocationText, ShoppingIcon } from './styles'
import { MapPin, ShoppingCart } from "phosphor-react";
import logoCoffee from '../../assets/logo-coffee-delivery.svg'


export function Header() {
    return(
        <HeaderContainer>
            <img src={logoCoffee} alt="" />
            <HeaderContent>
                <LocationText><MapPin size={24} weight="fill"/> Vinhedo, SP</LocationText>
                <ShoppingIcon><ShoppingCart size={24} weight="fill" /></ShoppingIcon>
            </HeaderContent>
            

        </HeaderContainer>
    )
}