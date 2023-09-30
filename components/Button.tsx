import React, {ButtonHTMLAttributes, forwardRef, ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}

// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, Props>(({
                                                         className, children, disabled, type = "button", ...props
                                                     }, ref) => {
    return (
        <button type={type}
                className={twMerge(`w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`, className)}
                disabled={disabled} ref={ref} {...props}>
            {children}
        </button>
    );
});

// button.displayName = "Button";

export default Button;