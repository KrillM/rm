import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 50vw;
    gap: 10;

    div: first-child,
    div: last-child {
        grid-column: span 2;
    }
`;

const Box = styled(motion.div)`
    background-color: rgba(255,255,255,1);
    border-radius: 40px;
    height: 100px;
    justify-content:center;
    align-items: center;
`;

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function App(){
    const [clickedBox, setClickedBox] = useState<null|number>(null);

    return (
        <Wrapper>
            <Grid>
                {[1,2,3,4].map(
                    (n) => (
                        <Box 
                            onClick={()=>setClickedBox(n)}
                            key={n} 
                            layoutId={n+""}
                        />
                    ))}
            </Grid>
            <AnimatePresence>
                {clickedBox ? (
                    <Overlay 
                        onClick={()=>setClickedBox(null)}
                        initial={{backgroundColor: "rgba(0,0,0,0)"}}
                        animate={{backgroundColor: "rgba(0,0,0,0.5)"}}
                        exit={{backgroundColor: "rgba(0,0,0,0)"}}
                    >
                        <Box 
                            layoutId = {clickedBox+""}
                            style={{width: 200, height: 100}}
                        />
                    </Overlay>
                    ) : null
                }
            </AnimatePresence>
        </Wrapper>
    );
}