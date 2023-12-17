import {useState} from 'react';

function App() {
  const [colour, setColour] = useState("olive");

  return (
    <div className=" w-full h-screen duration-200"  style={{backgroundColor:colour}}>
      <div className="flex flex-wrap items-end justify-center h-full text-lg"> 
      <div className="bg-slate-300 rounded-lg m-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded-3xl" onClick={() => setColour("blue")}>Blue</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded-3xl" onClick={() => setColour("red")}>Red</button>

      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-4 rounded-3xl" onClick={() => setColour("green")}>Green</button>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 mx-4 rounded-3xl " onClick={() => setColour("yellow")}>Yellow</button>
      </div>
        </div>
      </div>
  )
};

export default App;