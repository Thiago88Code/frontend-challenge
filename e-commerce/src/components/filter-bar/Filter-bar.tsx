import styled from "styled-components"
import { FilterBarType } from "./Filter-by-type.";


export function FilterBar() {

    const Container = styled.div`
    display: flex;   
    justify-content: flex-start;
    align-items: center;
`
    return (
        <Container>
            <FilterBarType />
        </Container>
    )
}