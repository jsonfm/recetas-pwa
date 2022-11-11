import { Routes, Route } from "react-router-dom";

// Pages
import { Home } from "@/pages/Home";
import { Detail } from "@/pages/Detail";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/detail" element={ <Detail />}/>
      </Routes>
    </div>
  )
}

export default App
