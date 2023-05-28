import styled from "styled-components"

const FilterList = styled.ul`
    display: flex;   
    justify-content: center;
    align-items: center;
    gap: 15px;
    `
const FilterItem = styled.li<IFilterItemProps>`
    font-family: inherit;
    list-style: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: var(--text-dark);

    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''}
`
interface IFilterItemProps {
    selected: boolean
}

export function FilterBarType() {
    return (
        <>
            <FilterList>
                <FilterItem selected={true}>TODOS OS PRODUTOS</FilterItem>
                <FilterItem selected={false}>CAMISETAS</FilterItem>
                <FilterItem selected={false}>CANECAS</FilterItem>
            </FilterList>
        </>
    )
}