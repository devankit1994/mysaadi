import React from "react";

type CommonButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
};

const CommonButton: React.FC<CommonButtonProps> = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out shadow-md";

  const variantStyles =
    variant === "primary"
      ? "text-white bg-gradient-to-r from-pink-500 to-orange-400 hover:from-orange-400 hover:to-pink-500"
      : "text-gray-800 bg-gray-200 hover:bg-gray-300";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles}`}
    >
      {text}
    </button>
  );
};

export default CommonButton;
