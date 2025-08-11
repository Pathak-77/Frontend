import React from "react";
import DeleteIcon from "../../components/icon/DeleteIcon";


const GlassPanel = ({ header = "", text = "", visible = false, onClose  }) => {
  return (
    <div
      className={` ${
  visible ? "absolute" : "hidden"
} left-1/2 transform -translate-x-1/2 -translate-y-20  w-[476px] h-[350px] bg-white bg-opacity-20 backdrop-blur-md rounded-lg border border-white border-opacity-30 shadow-lg`}
      style={{
        WebkitBackdropFilter: "blur(10px)",
        backdropFilter: "blur(10px)",
      }}
    >
      <button 
        onClick={onClose}
        className="absolute top-5 right-5  cursor-pointer" >
        <DeleteIcon />
      </button>
      <h1 className="text-3xl font-bold text-center text-gray-800 mt-10 mb-6">
    {header}
  </h1>
  <p className="text-lg text-gray-600 text-center px-6 leading-relaxed">
    {text}
  </p>
    </div>
  );
};

export default GlassPanel;
