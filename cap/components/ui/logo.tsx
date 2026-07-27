import * as React from "react";
import Image from "next/image";
import { logoIcon } from "@/assets";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: "light" | "dark";
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  theme,
  width = 141,
  height = 80,
  ...props
}) => {
  return (
    <div className={`flex items-center select-none ${className}`} {...props}>
      <Image
        src={logoIcon}
        alt="ELIMI Logo"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </div>
  );
};
