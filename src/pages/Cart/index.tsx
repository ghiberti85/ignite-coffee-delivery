import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Trash } from "phosphor-react";
import { QuantityInput } from "../../components/QuantityInput";
import { AddressContainer, AddressForm, AddressHeading, CartContainer, CheckoutButton, Coffee, CoffeeInfo, InvoiceContainer, PaymentContainer, PaymentHeading, PaymentOptions, TotalPurchased } from "./styles";
import { Fragment } from "react";


export function Cart() {
    return(
        <CartContainer>
            <InvoiceContainer>
                <h2>Complete seu pedido</h2>

                <form id="order">
                    <AddressContainer>
                        <AddressHeading>
                            <MapPin size={22} />
                            <div>
                                <span>Endereço de Entrega</span>
                                <p>Informe o endereço onde deseja receber o seu pedido</p>
                            </div>
                        </AddressHeading>
                        <AddressForm>
                            <TextInput placeholder="CEP" />
                            <TextInput placeholder="Rua" />
                            <TextInput placeholder="Número" />
                            <TextInput placeholder="Complemento" />
                            <TextInput placeholder="Bairro" />
                            <TextInput placeholder="Cidade" />
                            <TextInput placeholder="UF" />
                        </AddressForm>
                    </AddressContainer>
                    <PaymentContainer>
                        <PaymentHeading>
                            <CurrencyDollar size={22} />
                            <div>
                                <span>Pagamento</span>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </PaymentHeading>
                        <PaymentOptions>
                            <Radio>
                                <CreditCard size={16} />
                                <span>Cartão de Crédito</span>
                            </Radio>
                            <Radio>
                                <Bank size={16} />
                                <span>Cartão de Débito</span>
                            </Radio>
                            <Radio>
                                <Money size={16} />
                                <span>Dinheiro</span>
                            </Radio>
                        </PaymentOptions>
                    </PaymentContainer>
                </form>
            </InvoiceContainer>
            <CheckoutContainer>
                <h2>Cafés Selecionados</h2>
                <TotalPurchaseContainer>
                    <Fragment>
                        <Coffee>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <span>Expresso Tradicional</span>
                                    <CoffeeInfo>
                                        <QuantityInput quantity={0} addQuantity={function (): void {
                                            throw new Error("Function not implemented.");
                                        } } removeQuantity={function (): void {
                                            throw new Error("Function not implemented.");
                                        } } />

                                        <button>
                                            <Trash />
                                            <span>Remover</span>
                                        </button>
                                    </CoffeeInfo>
                                </div>
                            </div>
                            <aside>R$ 9,90</aside>
                        </Coffee>
                    </Fragment>
                    <TotalPurchased>
                        <div>
                            <span>Total de itens</span>
                            <span>R$9,90</span>
                        </div>
                        <div>
                            <span>Entrega</span>
                            <span>R$5,00</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>R$14,90</span>
                        </div>
                    </TotalPurchased>
                    <CheckoutButton type="submit" form="order">
                        Confirmar pedido
                    </CheckoutButton>
                </TotalPurchaseContainer>
            </CheckoutContainer>
        </CartContainer>
    )
}