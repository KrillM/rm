import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Box = styled(motion.div)`
    width: 400px;
    height: 200px;
    background-color: rgba(255,255,255,1);
    border-radius: 40px;
    position: absolute;
    top: 100px;
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: 28px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BtnArea = styled.div`
    display: flex;
`

const box = {
    entry: (isBack: boolean) => ({
        x: isBack ? -500 : 500,
        opacity: 0,
        scale: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 1 }
    },
    exit: (isBack: boolean) => ({
        x: isBack ? 500 : -500,
        opacity: 0,
        scale: 0,
        transition: { duration: 1 }
    })
}

export default function App(){
    const [visible, setVisible] = useState(1);
    const [isBack, setIsBack] = useState(false);

    const backDic = " < ";
    const nextDic = " > ";

    const backBtn = () => {
        setIsBack(true);
        setVisible((prev) => (prev === 1 ? 1 : prev -= 1))
    }
    const nextBtn = () => {
        setIsBack(false);
        setVisible((prev) => (prev === 10 ? 10 : prev += 1))
    }

    return (
        <Wrapper>
            <AnimatePresence custom={isBack}> 
                <Box 
                    custom={isBack} // 버튼에 따라 애니메이션 흐름을 다르게 해준다.
                    variants={box}
                    initial="entry"
                    animate="center"
                    exit="exit"
                    key={visible}
                >
                    {visible}
                </Box> 
            </AnimatePresence>
            <BtnArea>
                <button onClick={backBtn}>{backDic}</button>
                <button onClick={nextBtn}>{nextDic}</button>
            </BtnArea>
        </Wrapper>
    );
}