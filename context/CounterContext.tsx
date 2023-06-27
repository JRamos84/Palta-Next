import { createContext, useContext } from "react";

type ContextType ={
    increment:()=>void;
    counter: number
    updateCounter:(count:number)=>void
}

export const CounterContext =  createContext<ContextType>({
    increment:()=>{},
    counter:0,
    updateCounter:(count:number)=>{}
})

