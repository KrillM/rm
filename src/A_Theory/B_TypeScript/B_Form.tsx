import React, { useState } from "react"

export default function B_From(){
    // tsx에서는 state의 형식이 확정되면 다른 타입이 들어갈 때 오류가 발생한다.
    // const [counter, setCounter] = useState(1);
    // setCounter(10);
    // setCounter("Hello");

    // 아래와 같이 선언하면 허용된 타입은 들어올 수 있다.
    // const [value, setValue] = useState<number|string>(0);
    // setValue(10);
    // setValue("Hello");
    // setValue(true);
    
    const [userName, setUserName] = useState("");

    // TypeScript에서 데이터를 수정하고 전송할 때 사용하는 타입
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const{
            currentTarget: {value}
        } = event;
        setUserName(value);
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return(
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <input 
                        value={userName} 
                        onChange={onChange} 
                        type="text" 
                        placeholder="username"
                    />
                    <button>Log In</button>
                </form>
            </div>
        </>
    )
}