import styled from "styled-components"

const Container = styled.div`
    background-color: ${(props)=>props.theme.bgColor};
`;

const H1 = styled.h1`
    color:${(props)=>props.theme.textColor};
`;

export default function C_Theme(){
    return(
        <>
            <Container>
                <H1>
                    Portected
                </H1>
            </Container>
        </>
    )
}