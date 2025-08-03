import React from "react";
import DeleteIcon from "../../components/icon/DeleteIcon";


const GlassPanel = ({ header = "", text = "", visible = false, onClose  }) => {
  return (
    <div
      className={` ${
  visible ? "absolute" : "hidden"
} left-1/2 transform -translate-x-1/2 -translate-y-20  w-[476px] h-[500px] bg-white bg-opacity-20 backdrop-blur-md rounded-lg border border-white border-opacity-30 shadow-lg`}
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
      <h1>{header}</h1>
      <p>{text}</p>
    </div>
  );
};

export default GlassPanel;
