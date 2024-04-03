import Canvas from "./components/Canvas"
import { HexColorPicker } from "react-colorful";
import state from "./store"
import { useState } from "react";
import { useSnapshot } from "valtio";
function App() {
  const [color, setColor] = useState(false)
  // const [range, setRange]=useState() 
  const snap = useSnapshot(state);

  return (
    <div className=" h-[100vh] w-[100vh] mx-auto flex justify-center items-center flex-col">
      <Canvas width={700} height={500} />
      <div className=" w-full">
        <div className="flex justify-between w-full">
          <button onClick={() => setColor(true)}>Color</button>
          <button onClick={() => (setColor(false), state.color = "#fff")}>Eraser</button>
          <input type="range" name="size" id="size" value={snap.size} min="5" max="100" onChange={(e: any) => state.size = e.target.value} />
          {/* {state.size} */}
        </div>



        {color && (<HexColorPicker
          color={"#"}
          onChange={(color: string) => (state.color = color)}
        />)}
      </div>
    </div>
  )
}

export default App