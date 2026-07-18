import { BrowserRouter, Switch, Route } from "react-router-dom"
import Coins from "./Coins.tsx"
import Coin from "./Coin.tsx"

export default function Router (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin />
                </Route>
                <Route path="/">
                    <Coins />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}