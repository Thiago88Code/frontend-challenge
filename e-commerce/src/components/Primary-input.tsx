import styled from "styled-components";
import { SearchIcon } from "./icons/Search-icon";
import { InputHTMLAttributes } from "react";


export const InputContainer = styled.div`
position: relative;
width: 352px;


svg {
        position: absolute;
        left: 313px;

        top: 50%;
        transform: translateY(-50%);

    }    
    `
export const PrimaryInput = styled.input`

        width: 352px;
        border-radius: 8px;
        border: none;
        padding: 10px 16px; 
        
        background: var(--bg-secondary);
    
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);    
    `

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function PrimaryInputWSearchIcon(props: IInputProps) {
    return (
        <InputContainer>
            <PrimaryInput {...props} />
            <SearchIcon />
        </InputContainer>
    )
}