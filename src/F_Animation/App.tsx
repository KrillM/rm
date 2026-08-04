import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: rgba(255,255,255,0.2);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVariant: Variants = {
    start: { scale: 0 },
    end: {scale: 1, rotateZ: 360, transition: { type: "tween", delay: 0.5}}
}

const Circle = styled(motion.div)`
    background-color: white;
    height: 70px;
    width: 70px;
    place-self:center;
    border-radius: 35px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const boxVariants: Variants = {
    start: {
        opacity: 0,
        scale: 0.5,
    },
    end: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.5,
            bounce: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.2,
        }
    }
}

const circleVariants: Variants = {
    start: {
        opacity: 0,
        y: 10,
    },
    end: {
        opacity: 1,
        y: 0,
    }
}

export default function App(){
    return (
        <Wrapper>
            {/* Basic */}
            {/* <Box 
                transition={{type:"tween", stiffness: 10}} // 기본값: spring
                initial={{scale:0}}
                animate={{scale:1, rotateZ: 360}}
            /> */}

            {/* Variant */}
            {/* <Box 
                variants={myVariant} // myVariant의 start와 이름이 같아야 한다.
                animate="end"        // myVariant의 end와 이름이 같아야 한다.
            /> */}

            <Box variants={boxVariants} initial="start" animate="end">
                {/* 부모에서 initial, animate 선언하면 자녀는 따로 선언할 필요가 없다. */}
                <Circle variants={circleVariants}/>
                <Circle variants={circleVariants}/>
                <Circle variants={circleVariants}/>
                <Circle variants={circleVariants}/>
            </Box>
        </Wrapper>
    );
}