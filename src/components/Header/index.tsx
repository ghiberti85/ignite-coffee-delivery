import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import logoSvg from '../../assets/logo-coffee-delivery.svg'


import { Aside, Container } from './styles'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()

  return (
    <Container>
      <Link to="/">
        <img src={logoSvg} alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Curitiba, PR</span>
        </div>

        <Link to={`cart`} >
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </Container>
  )
}