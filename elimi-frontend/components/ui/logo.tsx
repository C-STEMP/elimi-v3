import * as React from "react";
import Image from "next/image";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: "light" | "dark";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  theme,
  ...props
}) => {
  return (
    <div className={`flex items-center select-none ${className}`} {...props}>
      <Image
        src="/icons/LOGO-STANDARD-2.svg"
        alt="ELIMI Logo"
        width={141}
        height={80}
        priority
        className="object-cover"
      />
    </div>
  );
};
