import { HeroContainer, HeroContent, Subtitle, Title, Features, FeatureContainer, IconContainer } from './styles'
import bannerCoffee from '../../../../assets/banner-img.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

export function HeroSection() {
    return(
        <HeroContainer>
            <HeroContent>
                <Title>
                    Encontre o café perfeito para qualquer hora do dia
                </Title>
                <Subtitle>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </Subtitle>
                <Features>
                    <FeatureContainer>
                        <IconContainer variant="yellow-dark">
                            <ShoppingCart size={24} weight="fill" color="#fff" />
                        </IconContainer>
                        Compra simples e segura
                    </FeatureContainer>
                    <FeatureContainer>
                        <IconContainer>
                            <Package size={24} weight="fill" color="#fff" />
                        </IconContainer>
                        Embalagem mantém o café intacto
                    </FeatureContainer>
                    <FeatureContainer>
                        <IconContainer variant="yellow">
                            <Timer size={24} weight="fill" color="#fff" />
                        </IconContainer>
                        Entrega rápida e rastreada
                    </FeatureContainer>
                    <FeatureContainer>
                        <IconContainer variant="purple">
                            <Coffee size={24} weight="fill" color="#fff" />
                        </IconContainer>
                        O café chega fresquinho até você
                    </FeatureContainer>
                </Features>
            </HeroContent>
            <img src={bannerCoffee} alt="" />
        </HeroContainer>
    )
}