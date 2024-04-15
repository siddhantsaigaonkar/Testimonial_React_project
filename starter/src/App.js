import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data"
const App = () => {

  return <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
    <div className="text-center">
      <h1>Our Testimonial</h1>
      <div className="bg-violet-400 h-[3px] w-[80px] mt-1 mx-auto" ></div>
      <Testimonial reviews={reviews } />
    </div>
  </div>;
};

export default App;
