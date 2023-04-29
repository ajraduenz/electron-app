import { useState } from "react";
import Update from "@/components/update";
import logoVite from "./assets/logo-vite.svg";
import logoElectron from "./assets/logo-electron.svg";
import "./App.scss";

console.log("[App.tsx]", `Hello world from Electron ${process.versions.electron}!`);
interface Position {
  x: number;
  y: number;
}

interface MouseProps {
  render: (position: Position) => JSX.Element;
}

function Mouse({ render }: MouseProps) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    setPosition({ x: event.clientX, y: event.clientY });
  }

  return (
    <div style={{ height: "100%" }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="logo-box">
        <a href="https://github.com/electron-vite/electron-vite-react" target="_blank">
          <img src={logoVite} className="logo vite" alt="Electron + Vite logo" />
          <img src={logoElectron} className="logo electron" alt="Electron + Vite logo" />
        </a>
      </div>
      <h1>Electron + Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Electron + Vite logo to learn more</p>
      <div className="flex-center">
        Place static files into the<code>/public</code> folder{" "}
        <img style={{ width: "5em" }} src="./node.svg" alt="Node logo" />
      </div>

      <Update />
      <Mouse
        render={({ x, y }: any) => (
          <h1>
            The mouse position is ({x}, {y})
          </h1>
        )}
      />
    </div>
  );
}

export default App;
