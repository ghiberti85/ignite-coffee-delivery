import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logoSvg from '../../../public/logo-coffee-delivery.svg'


import { Aside, Container } from './styles'

export function Header() {

  return (
    <Container>
      <Link to="/">
        <img src={logoSvg} alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to={`cart`} >
          <ShoppingCart size={22} weight="fill" />
        </Link>
      </Aside>
    </Container>
  )
}