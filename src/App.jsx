import React from "react";
import Clock from "./components/clock";


const App = () => {
  return (
    <div className="w-full h-[80vh] nunito flex items-center justify-between flex-col">
      <h1 className="text-5xl font-semibold mt-10">Digital clock</h1>
      <Clock />
    </div>
  );
};

export default App;
