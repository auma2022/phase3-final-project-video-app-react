import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
 //import Home from "./pages/Home";
 import Video from "./pages/Video";
 //import SignIn from "./pages/SignIn";

function App() {
  return (
  <div className="flex">
     <BrowserRouter>
      {/*sidebar*/}
      <Menu />
      <main className="fl" >
       <Navbar />
       <wrapper className="">
         <Routes>
                <Route path="/">
                  {/* <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} /> */}
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
          </Routes>
       </wrapper>
      </main>
     </BrowserRouter>
   </div>
  );
}

export default App;
