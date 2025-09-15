import React from "react";

type CommonButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const CommonButton: React.FC<CommonButtonProps> = ({
  text,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-3 rounded-full font-semibold text-white 
                 bg-gradient-to-r from-pink-500 to-orange-400 
                 hover:from-orange-400 hover:to-pink-500 
                 transition duration-300 ease-in-out shadow-md"
    >
      {text}
    </button>
  );
};

export default CommonButton;
