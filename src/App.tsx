import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState<string>("");

  const handleClick = (value: string) => {
    if (value === "AC") {
      setInput("0");
    } else if (value === "C") {
      setInput(input.slice(0, -1));
      } else if (value === "=") {
        try {
          setInput(eval(input).toString());
        } catch {
          setInput("Error");
        }
      } else if (value === "%") {
        try {
          setInput((parseFloat(input) / 100).toString());
        } catch {
          setInput("Error");
        }
      } else {
        if (input === "0") {
          setInput(value);
        } else {
          setInput(input + value);
        }
      }
    };
  return (
    <main className="flex justify-center items-center h-screen bg-gray-200">
    <div className="p-10 bg-white rounded-2xl shadow">
      <div className="grid grid-cols-4 gap-4">
      <input type="text" className="col-span-4 p-2 bg-black bg-opacity-20 rounded-lg text-right" value={input} readOnly placeholder='0' />
          <button onClick={() => handleClick("AC")} className="py-2 px-4 bg-red-500 text-white rounded">AC</button>
          <button onClick={() => handleClick("C")} className="py-2 px-4 bg-red-500 text-white rounded">C</button>
          <button onClick={() => handleClick("%")} className="py-2 px-4 bg-red-500 text-white rounded">%</button>
          <button onClick={() => handleClick("/")} className="py-2 px-4 bg-red-500 text-white rounded">/</button>
          <button onClick={() => handleClick("7")} className="py-2 px-4 bg-blue-500 text-white rounded">7</button>
          <button onClick={() => handleClick("8")} className="py-2 px-4 bg-blue-500 text-white rounded">8</button>
          <button onClick={() => handleClick("9")} className="py-2 px-4 bg-blue-500 text-white rounded">9</button>
          <button onClick={() => handleClick("+")} className="py-2 px-4 bg-red-500 text-white rounded">+</button>
          <button onClick={() => handleClick("4")} className="py-2 px-4 bg-blue-500 text-white rounded">4</button>
          <button onClick={() => handleClick("5")} className="py-2 px-4 bg-blue-500 text-white rounded">5</button>
          <button onClick={() => handleClick("6")} className="py-2 px-4 bg-blue-500 text-white rounded">6</button>
          <button onClick={() => handleClick("-")} className="py-2 px-4 bg-red-500 text-white rounded">-</button>
          <button onClick={() => handleClick("1")} className="py-2 px-4 bg-blue-500 text-white rounded">1</button>
          <button onClick={() => handleClick("2")} className="py-2 px-4 bg-blue-500 text-white rounded">2</button>
          <button onClick={() => handleClick("3")} className="py-2 px-4 bg-blue-500 text-white rounded">3</button>
          <button onClick={() => handleClick("*")} className="py-2 px-4 bg-red-500 text-white rounded">*</button>
          <button onClick={() => handleClick("0")} className=" col-span-2 py-2 px-4 bg-blue-500 text-white rounded">0</button>
          <button onClick={() => handleClick(".")} className="py-2 px-4 bg-blue-500 text-white rounded">.</button>
          <button onClick={() => handleClick("=")} className="py-2 px-4 bg-green-500 text-white rounded">=</button>
      </div>
    </div>
  </main>
  )
}

export default App
