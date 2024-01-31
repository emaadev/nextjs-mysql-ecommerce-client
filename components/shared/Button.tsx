import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button" }, ref) => {
    return (
      <button
        type={type}
        ref={ref}
        className={cn(
          "w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-75 text-white font-semibold hover:opacity-75 transition",
          className
        )}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "button";

export default Button;
