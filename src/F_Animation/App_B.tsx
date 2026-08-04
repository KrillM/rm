import styled from "styled-components";
import { motion, transform, useMotionValue, Variants, useTransform, useViewportScroll } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled(motion.div)`
    height: 200vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ParentBox = styled.div`
    width: 600px;
    height: 600px;
    background-color: rgba(255,255,255,0.2);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255,255,255,1);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box4Variant = styled(motion.div)`
    width: 200px;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: rgba(255,255,255,0.2);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box4Gesture = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255,255,255,1);
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
            staggerChildren: 0.2, // 자녀 route에서 순서대로 등장하게 해준다.
        }
    }
}

const circleVariants: Variants = {
    // x, y는 motion 고유 문법이다.
    start: {
        opacity: 0,
        y: 10,
    },
    end: {
        opacity: 1,
        y: 0,
    }
}

const boxGesture = {
    // hover : { scale: 1.5, rotateZ: 90},
    // click : {scale: 1, borderRadius: "100px"},
    // drag: {backgroundColor: "rgb(46, 204, 113)", transition: {duration: 10}}
    hover: { rotateZ: 90 },
    click: { borderRadius: "100px" },
}

export default function App(){
    const parentBoxRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const scaleX = useTransform(x, [-800,0,800], [2,1,0]);
    const rotateX = useTransform(x, [-800,800], [-360,360]);
    const gradient = useTransform(
        x,
        [-800,800],
        [
            "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
            "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
        ]
    )
    const {scrollYProgress} = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0,1], [1,5]);

    return (
        <Wrapper style={{background: gradient}}>
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

            {/* <Box4Variant variants={boxVariants} initial="start" animate="end">
                // 부모에서 initial, animate 선언하면 자녀는 따로 선언할 필요가 없다. 
                <Circle variants={circleVariants}/>
                <Circle variants={circleVariants}/>
                <Circle variants={circleVariants}/>
                <Circle variants={circleVariants}/>
            </Box4Variant> */}

            {/* Gestures */}
            {/* <ParentBox ref={parentBoxRef}>
                <Box4Gesture 
                    drag // 이동 가능하나 제한이 없다
                    dragSnapToOrigin // 이동 후 마우스 클릭을 해체하면 원래 위치로 돌아온다
                    dragElastic={0.5} // dragElastic의 기본 값
                    dragConstraints={parentBoxRef}
                    variants={boxGesture}
                    whileHover="hover"
                    whileDrag="drag"
                    whileTap="click"
                />
            </ParentBox> */}

            {/* Motion Value */}
            {/* <Box 
                style={{ x, scale: scaleX }}
                drag="x" 
                dragSnapToOrigin 
            /> */}
            <Box 
                style={{ x, rotateX, scale }}
                drag="x" 
                dragSnapToOrigin 
            />
        </Wrapper>
    );
}