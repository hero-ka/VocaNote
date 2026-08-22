import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className = "", ...props }: InputProps) => {
    return (
        <input
            className={` w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all duration-200 placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-100 disabled:cursor-not-allowed disabled:bg-neutral-50 ${className}`}
            {...props}
        />
    );
};

export default Input;