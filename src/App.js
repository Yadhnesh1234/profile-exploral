import Home from "./pages/home"
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
<Routes>
   <Route path="/home" element={<Home/>}></Route>
</Routes>
    </>
  );
}

export default App;
