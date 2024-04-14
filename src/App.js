import Home from "./pages/home"
import Exploral from "./pages/exploral";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
<Routes>
   <Route index element={<Home/>}></Route>
   <Route path="/exploral" element={<Exploral/>}></Route>
</Routes>
    </>
  );
}

export default App;
