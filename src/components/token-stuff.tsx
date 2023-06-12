'use client'

import dynamic from "next/dynamic"
import { useEffect } from "react"

// @ts-ignore
import Token from "main/getToken"
// // @ts-ignore
// import Button from "main/button"



// // @ts-ignore
// import Sam from 'main/getToken'

// @ts-ignore
import CounterStore from 'main/counter'
  

export const TokenStuff = () => {


    useEffect(() => {
        console.log(Token());
        // console.log(CounterStore);
    }, [])

    return (
        <div>
            <h1>Token Stuff</h1>
            <button onClick={() => {
                console.log(Token());
            }}>stuff</button>
        </div>
    )
}

export default TokenStuff