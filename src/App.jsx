import { Routes, Route } from "react-router-dom";

// Components
import { Layout } from "@/components/Layout";

// Pages
import { Home } from "@/pages/Home";
import { Detail } from "@/pages/Detail";
import { Welcome } from "@/pages/Welcome";
import { Explore } from "@/pages/Explore";
import { Grocery } from "@/pages/Grocery";
import { Profile } from "@/pages/Profile";


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/recipes" element={ <Home />}/>
          <Route path="/" element={ <Welcome />}/>
          <Route path="/detail" element={ <Detail />}/>
          <Route path="/explore" element={ <Explore />}/>
          <Route path="/grocery" element={ <Grocery />}/>
          <Route path="/profile" element={ <Profile />}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
