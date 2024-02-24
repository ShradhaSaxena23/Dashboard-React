import React from "react";
import Header from "./Components/header/Header";
import Navbar from "./Components/navbar/Navbar";
import LeftPart from "./Components/leftpart/LeftPart";
import RightPart from "./Components/rightpart/RightPart";


function App() {
  return (
    <div className="App overflow-y-hidden " >
      <Header />
      <div className='w-full min-h-[90vh] grid grid-cols-12 ' >
      <Navbar />
      <div className="grid grid-cols-1 xl:grid-cols-5 w-full col-span-10">
        {/*main content left*/}
        <LeftPart/>
        {/*main content right*/}
        <RightPart/>
      </div>
      </div>
    </div>
  );
}

export default App;
