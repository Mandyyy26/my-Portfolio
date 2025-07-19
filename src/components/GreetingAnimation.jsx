import React from "react";
import Lottie from "lottie-react";
import hiMandy from "../assets/hiMandy.json"; // adjust path if needed

const GreetingAnimation = () => {
  return (
    <div className="flex flex-col items-center mt-6 p-6 rounded-xl bg-gray-500 shadow-lg animate-fadeIn">
      <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64">
        <Lottie
          animationData={hiMandy}
          loop
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-4 animate-fadeInUp">
        I’m <span className="text-indigo-400">Mandy</span> 👋
      </h2>
    </div>
  );
};

export default GreetingAnimation;
