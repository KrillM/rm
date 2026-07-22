import { BrowserRouter, Switch, Route } from "react-router-dom"
import Coins from "./Coins"
import Coin from "./Coin"
interface IRouterProps {
  toggleDark: () => void;
  isLightTheme: boolean;
}

export default function Router ({toggleDark, isLightTheme}:IRouterProps){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin isLightTheme={isLightTheme}/>
                </Route>
                <Route path="/">
                    <Coins toggleDark={toggleDark} isLightTheme={isLightTheme}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}