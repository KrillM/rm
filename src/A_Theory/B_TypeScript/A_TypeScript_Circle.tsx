import { useState } from "react";
import styled from "styled-components"

// 인터페이스에서 타입을 미리 선언한다.
interface StringProps {
    bgColor:string;

    // undefined 선언 시 default 값은 필수이다.
    borderColor?:string; 
    text?:string;
}

const Container = styled.div<StringProps>`
    background-color: ${(props)=>props.bgColor};
    border: 1px solid ${(props)=>props.borderColor};
    color: yellow;
    height:200px;
    width:600px;
`;

export default function A_TypeScript_Circle ({bgColor, borderColor, text="Ukraine"}:StringProps) {
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    )
}