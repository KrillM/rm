import { useRecoilState, useRecoilValue } from "recoil"
import { hourSelector, minuteState } from "./atoms";
import React from "react";

export default function SetApp(){
    const [minutes, setMinutes] = useRecoilState(minuteState);
    const [hours, setHours] = useRecoilState(hourSelector);
    const onMinutesChange = (event:React.FormEvent<HTMLInputElement>)=> {
        setMinutes(+event.currentTarget.value);
    }
    const onHoursChange = (event:React.FormEvent<HTMLInputElement>)=> {
        setHours(+event.currentTarget.value);
    }

    return (
        <>
            <input 
                value={minutes} 
                onChange={onMinutesChange} 
                type="number" 
                placeholder="Minutes" 
            />
            <input 
                onChange={onHoursChange} 
                value={hours} 
                type="number" 
                placeholder="Hours" 
            />
        </>
    )
}