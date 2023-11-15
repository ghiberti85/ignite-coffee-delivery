import { HomeContainer, HomeContent, Icon, IconsList, Subtitle, Title } from './styles'
import bannerCoffee from '../../assets/banner-img.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

export function Home() {
    return(
        <HomeContainer>
            <HomeContent>
                <Title>
                    Encontre o café perfeito para qualquer hora do dia
                </Title>
                <Subtitle>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </Subtitle>
                <IconsList>
                    <Icon><ShoppingCart size={24} weight="fill" />Compra simples e segura</Icon>
                    <Icon><Package size={24} weight="fill" />Embalagem mantém o café intacto</Icon>
                    <Icon><Timer size={24} weight="fill" />Entrega rápida e rastreada</Icon>
                    <Icon><Coffee size={24} weight="fill" />O café chega fresquinho até você</Icon>
                </IconsList>
            </HomeContent>
            <img src={bannerCoffee} alt="" />
        </HomeContainer>
        
    );
}