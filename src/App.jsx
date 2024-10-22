import { Route, Routes } from "react-router-dom";
import Home from "./component/Demo/Home/Home";
import Demo from "./component/Demo/Home/Demo";
import HomeHeader from "./component/Demo/Home/HomeHeader";
import DemoHeader from "./component/Demo/DemoHeader";



function App() {
   const auth = false;

  return (
    <>
    {auth ? <HomeHeader /> : <DemoHeader />}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/demo" element={<Demo /> } />
    </Routes>
    </>
  )
}

export default App
