import styled, {keyframes} from "styled-components"

const Wrapper = styled.div`
    display:flex;
`;

const Animation = keyframes`
    // from{
    //     transform:rotate(0deg);
    //     border-radius:0px;
    // }
    // to{
    //     transform:rotate(360deg);
    //     border-radius:100px;
    // }
    0%{
        transform:rotate(0deg);
        border-radius:0px;
    }
    50%{
        border-radius:100px;
    }
    100%{
        transform:rotate(360deg);
        border-radius:0px;
    }
`

const Emoji = styled.span`
    font-size:36px;
`;

const Box = styled.div`
    width: 200px;
    height: 200px;
    background-color:${(props)=>props.bgColor};
    display:flex;
    justify-content:center;
    align-items:center;
    animation:${Animation} 1s linear infinite;

    // 내부 태그에 적용됨
    // span {
    //     font-size:36px;
    //     &:hover{
    //         font-size:40px;   
    //     }
    // }
    // 위와 같은거다.
    // span:hover{
    //     font-size:40px;   
    // }

    ${Emoji} {
        &:hover{
            font-size:60px;   
        }
    }
`

export default function B_Animation () {
    return(
        <Wrapper>
            <Box bgColor="red">
                {/* <span>😍</span> */}
                <Emoji>🛸</Emoji>
            </Box>
        </Wrapper>
    )
}