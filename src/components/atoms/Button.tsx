import React from "react";
import Image, { StaticImageData } from "next/image";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  leadingIcon?: string | StaticImageData;
  tailingIcon?: string | StaticImageData;
}

export const Button = (props: ButtonProps) => {
  const { buttonText, leadingIcon, tailingIcon } = props;
  return (
    <button className="flex items-center gap-1">
      {leadingIcon && (
        <Image src={leadingIcon} alt="leading icon" width={24} height={24} />
      )}
      {buttonText}
      {tailingIcon && (
        <Image src={tailingIcon} alt="tailing icon" width={24} height={24} />
      )}
    </button>
  );
};
