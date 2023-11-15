import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from "phosphor-react";
import logoCoffee from '../../assets/logo-coffee-delivery.svg'


export function Header() {
    return(
        <HeaderContainer>
            <img src={logoCoffee} alt="" />
            <p><MapPin size={24} /> Vinhedo, SP</p>
            <ShoppingCart size={24} fill="#000" />
            

        </HeaderContainer>
    )
}