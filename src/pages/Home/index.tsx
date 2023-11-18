import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { CoffeeList, CoffeeListContainer, Heading, HeroContainer, HeroContent, Info, InfoContainer } from "./styles"

import bannerImg from '../../assets/banner-img.png'

import { useTheme } from 'styled-components'

export function Home () {
    const theme = useTheme()

    return (
        <>
            <HeroContainer>
                <HeroContent>
                    <Heading>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <span>
                            Com o Coffee Delivery você recebe seu café onde estiver, 
                            a qualquer hora
                        </span>
                    </Heading>
                    <InfoContainer>
                        <Info>
                            <ShoppingCart
                                size={32}
                                weight="fill"
                                color={theme.colors.background}
                                style={{ backgroundColor: theme.colors['yellow-dark']}}
                            />
                            <span>Compra simples e segura</span>
                        </Info>
                        <Info>
                            <Package
                                size={32}
                                weight="fill"
                                color={theme.colors.background}
                                style={{ backgroundColor: theme.colors['base-text']}} 
                            />
                            <span>Embalagem mantém o café intacto</span>
                        </Info>
                        <Info>
                            <Timer
                                size={32}
                                weight="fill"
                                color={theme.colors.background}
                                style={{ backgroundColor: theme.colors['yellow']}}                          
                            />
                            <span>Entrega rápida e rastreada</span>
                        </Info>
                        <Info>
                            <Coffee
                                size={32}
                                weight="fill"
                                color={theme.colors.background}
                                style={{ backgroundColor: theme.colors['purple']}}                         
                            />
                            <span>O café chega fresquinho até você</span>
                        </Info>
                    </InfoContainer>
                </HeroContent>
                <img src={bannerImg} id="hero-bg" alt=""/>
            </HeroContainer>

            <CoffeeListContainer>
                <h2>Nossos cafés</h2>
                <CoffeeList>
                </CoffeeList>
            </CoffeeListContainer>
        </>
    )
}