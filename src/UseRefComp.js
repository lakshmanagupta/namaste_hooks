import { useRef, useState } from "react"

const UseRefComp = () => {
    //Consider scenario of heavy operation and how it executed after every re-render
    const [count, setCount] = useState(0)
    let val = 0;
    const refValue = useRef(0)
    console.log("ReRendering")
    return <div className="w-72 h-72 m-5 border-slate-500 border bg-slate-100 text-2xl">
        <div className="m-5 flex flex-col">
            <h3 className="my-2 font-bold">Learn useRef</h3>
            <button onClick={() => { ++val; console.log("Let -",val) }} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">Let - {val}</button>
            <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">useState - {count}</button>
            <button onClick={() => { ++refValue.current; console.log("refValue", refValue.current) }} className=" bg-blue-500 hover:bg-blue-700 text-white m-2 font-bold py-2 px-4 rounded">useRef - {refValue.current}</button>
        </div>
    </div >
}
export default UseRefComp