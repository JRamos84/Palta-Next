import { ReactNode, useCallback, useState } from "react"
import { CounterContext } from "./CounterContext"

interface CounterContextProviderProps{
    children: ReactNode;
}

const CounterContextProvider: React.FC<CounterContextProviderProps>=({children})=>{
    const [counter, setCounter] = useState(0)
    const increment = useCallback(()=>{
        setCounter((prevCounter)=> prevCounter + 1)
    },[])

    const updateCounter = useCallback((count:number)=>{
        setCounter((prevent)=> prevent+count)
    },[])

    return(
        <CounterContext.Provider value={{counter, increment,updateCounter}}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider