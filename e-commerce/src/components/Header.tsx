
import styled from "styled-components";

import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from "./Primary-input";
import { CartController } from "./Cart-controller";

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})


interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 26px;
    }
`
const Logo = styled.a`
    font-size: 40px;
    font-weight: 400;
    line-height: 150%;
    text-align: left;
    color: var(--logo-color);
`

export function Header(props: HeaderProps) {
    return (
        <TagHeader>
            <Logo className={sairaStencil.className}>Caputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon placeholder="testnbjbjnbnjb jb jb jbjbj" />
                <CartController />
            </div>
        </TagHeader>
    )
}