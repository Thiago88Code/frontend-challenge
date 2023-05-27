import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/Cart-icon";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    top: 50%;
`

const CartCount = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--delete-color);
    color: #fff;
    width: 17px;
    height: 17px;
    position: absolute;
    left: 15px;
    top: 50%;
    border-radius: 100%;
    font-size: 10px;


`

export function CartController() {
    const { value } = useLocalStorage('cart-items')
    return (
        <Container>
            <CartIcon />
            <CartCount>5</CartCount>
        </Container>

    )
}

