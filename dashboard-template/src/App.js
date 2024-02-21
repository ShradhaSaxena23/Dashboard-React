import React from "react";
import Header from "./Components/header/Header";
import Navbar from "./Components/navbar/Navbar";


function App() {
  return (
    <div className="App overflow-y-hidden " >
      <Header />
      <div className='w-full min-h-[90vh] grid grid-cols-12 ' >
      <Navbar />
      <div>
        {/*main content left*/}
        {/*main content right*/}
      </div>
      </div>
    </div>
  );
}

export default App;
