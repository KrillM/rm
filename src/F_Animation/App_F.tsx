import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255,255,255,1);
    border-radius: 40px;
    display: flex;
    justify-content:center;
    align-items: center;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle =styled(motion.div)`
    background-color: rgba(0, 165, 255, 1);
    height: 40px;
    width: 40px;
    border-radius: 100%;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

export default function App(){
    const [isClick, setIsClick] = useState(false);
    const toggleClick = () => {
        setIsClick((prev)=> !prev);
    }

    return (
        // layout: 순간 이동이 아닌 자연스러운 이동을 보여줌
        // layoutId: wrapper 내부에 깍쇄간 이동 가능
        <Wrapper onClick={toggleClick}>
            <Box>
                {!isClick ? 
                    <Circle 
                        layoutId="circle"
                        style={{borderRadius: 50}}
                    /> 
                    : null
                }
            </Box>
            <Box>
                {isClick ? 
                    <Circle 
                        layoutId="circle"
                        style={{borderRadius: 0, scale: 2}}
                    /> 
                    : null
                }
            </Box>  
        </Wrapper>
    );
}