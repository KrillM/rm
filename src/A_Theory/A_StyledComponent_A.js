import styled from "styled-components";

// 이 내부에 CSS 코드를 작성한다.
const Father = styled.div`
    display: flex;
`;

// BoxOne, BoxTwo는 구조가 동일해서 여러번 쓰는 건 비효율 적이다.
const BoxOne = styled.div`
    background-color: blue;
    width: 100px;
    height: 100px;
`;

const BoxTwo = styled.div`
    background-color: yellow;
    width: 100px;
    height: 100px;
`;

// 동일한 구조는 통일하자.
const Box = styled.div`
    background-color: ${(props)=>props.bgColor};
    width: 100px;
    height: 100px;
`;

// 부모의 성격을 받아서 자식에서 재창조
const Circle = styled(Box)`
    border-radius:50px;
`;

const Text = styled.span`
    color:white;
`;

export default function A_StyledComponent() {
  return (
    <Father>
        <Box bgColor="blue">
            <Text>Hello World</Text>
        </Box>
        <Box bgColor="yellow"/>
        <Circle bgColor="red"/>
    </Father>
  );
}