import { Routes, Route } from "react-router-dom";

// Components
import { Layout } from "@/components/Layout";

// Pages
import { Home } from "@/pages/Home";
import { Detail } from "@/pages/Detail";
import { Welcome } from "@/pages/Welcome";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/welcome" element={ <Welcome />}/>
          <Route path="/detail" element={ <Detail />}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
