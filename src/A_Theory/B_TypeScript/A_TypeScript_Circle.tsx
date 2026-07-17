import styled from "styled-components"

// 인터페이스에서 타입을 미리 선언한다.
interface StringProps {
    bgColor:string;
}

const Container = styled.div<StringProps>`
    background-color: ${(props)=>props.bgColor};
    height:200px;
    width:600px;
`;

export default function A_TypeScript_Circle ({bgColor}:StringProps) {
    return <Container bgColor={bgColor} />
}