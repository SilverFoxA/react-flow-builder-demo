import './App.css';
import { Analytics } from "@vercel/analytics/react"
import {FlowBuilder} from "@madgeek_in/react-flow-builder";

function App() {
  return (
   <div className="App">
    <Analytics />
    <FlowBuilder allowDragging={true} flow={'vertical'}/>
    </div>
  );
}

export default App;
