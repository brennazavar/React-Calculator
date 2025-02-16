import React from "react";
import "./index.css";
import CalculatorButtons from "./components/CalculatorButtons";

const App = () => {
  return (
    <div className="fixed flex items-center justify-center">
      <div className="bg-gray-900 h-[550px] w-[320px] border border-gray-900 flex items-center justify-center rounded-md">
        <CalculatorButtons />
      </div>
    </div>
  );
};

export default App;
