import React, { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, Props>(({
                                                       className, type, disabled, ...props
                                                   }, ref) => {
    return (
        <input className={twMerge(`flex w-full rounded-md bg-neutral-700 border border-transparent 
        px-3 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium 
        placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none`, className)}
               type={type} disabled={disabled} ref={ref} {...props} />
    );
});

// input.displayName = "Input";
export default Input;