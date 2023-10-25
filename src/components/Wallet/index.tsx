import { useEffect, useState } from "react";
import { wallet } from "../../database/data";
import { Description } from "./styles";

export function MyWallet(){
    const [total, setTotal] = useState<number>(0);

    async function calcTotal(){
     const calc = wallet.reduce((acc, item) => 
         acc + item.wallet, 0
     )
     setTotal(calc)
    }
 
    useEffect(() => {
     calcTotal()
    }, [])

    return(
        <Description>
            <span>Total</span>
            {
                total < 0 ? (
                    <h1>R$ - {total}</h1>
                ) : ( 
                <h1>R$ {total}</h1>
                )
            }
            
        </Description>
    )
}