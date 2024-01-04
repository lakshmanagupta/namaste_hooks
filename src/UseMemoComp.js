import { useMemo, useState } from "react"
import FindNthPrime from "./FindNthPrime"

const useMemoComp = () => {
    //Consider scenario of heavy operation and how it executed after every re-render
    const [count, setCount] = useState(0)
    const [val, setVal] = useState(0)
    useMemo(() => FindNthPrime(val), [val])
    // FindNthPrime(val)
    return <div className="w-72 h-72 m-5 border-slate-500 border bg-slate-100 text-2xl">
        <div className="m-5">
            <h3 className="my-2 font-bold">Learn useMemo</h3>
            <h4>PrimeNumber - {val}</h4>
            <input onChange={(e) => { setVal(e.target.value) }} className="max-w-56 border-slate-500 border" placeholder="enter number"></input>
            <button onClick={() => setCount(count + 1)} className=" bg-red-700 p-2 w-40 h-10">Count - {count}</button>
        </div>
    </div>
}
export default useMemoComp