import { useParams } from "react-router-dom"

interface Params {
    coinId: string;
}

export default function Coin (){
    // URL 경로의 coinId 값을 가져온다.
    const {coinId} = useParams<Params>();
    
    return(
        <>
            <h1>Coin : {coinId}</h1>
        </>
    )
}