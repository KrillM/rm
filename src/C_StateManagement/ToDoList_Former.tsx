import React, { useState } from "react";

export default function TodoList(){
    // 기존 방법
    const [value, setValue] = useState("")
    const onChange = (event:React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value},
        } = event;
        setValue(value);
    }
    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={value} placeholder="Write a to do" />
                <button>Add</button>
            </form>
        </div>
    );
}