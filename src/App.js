import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex"  >
      {/*sidebar*/}
      <Menu />
      <main className="fl" >
       <Navbar />
       <wrapper className="ml-6 text-[25px] text-red-600 font-bold font-[larken] ">
          VIDEO APP
       </wrapper>
      </main>

      </div>
  );
}

export default App;
