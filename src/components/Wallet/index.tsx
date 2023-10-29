import {useContext } from "react";

import { Description } from "./styles";
import { FinancialContext } from "../../context/FinancialContext";

export function MyWallet(){
    const {totalValue} = useContext(FinancialContext);
    return(
        <Description>
            <span>Total</span>
            {
                totalValue < 0 ? (
                    <h1>R$ - {totalValue}</h1>
                ) : ( 
                <h1>R$ {totalValue}</h1>
                )
            }
            
        </Description>
    )
}