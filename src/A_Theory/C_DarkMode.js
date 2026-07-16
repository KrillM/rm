import { useState } from "react";
import styled from "styled-components";

const Parent = styled.body`
    background-color:${(p)=> p.fontColor};
`;

const Btn = styled.button`
    font-size:20px;
`;

const Text = styled(Btn)`
    background-color:${(p)=> p.bgColor};
    color:${(p)=> p.fontColor};   
`

const C_DarkMode = () => {

    const black = "black";
    const white = "white";
    const dkMode = "Dark Mode";
    const ltMode = "Light Mode";

    const [mode, setMode] = useState(dkMode);
    const [bgColor, setBgColor] = useState(black);
    const [fontColor, setFontColor] = useState(white);

    const changeMode = () => {
        if (bgColor === black){
            setBgColor(white);
            setFontColor(black);
            setMode(ltMode);
        }
        else {
            setBgColor(black);
            setFontColor(white);
            setMode(dkMode);
        }
    }

    return(
        <Parent fontColor={fontColor} >
            <Text 
                bgColor={bgColor} 
                fontColor={fontColor} 
                onClick={changeMode}
            >
                {mode}
            </Text>
        </Parent>
    )
}

export default C_DarkMode;