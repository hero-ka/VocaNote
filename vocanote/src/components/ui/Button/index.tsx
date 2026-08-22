import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant = "primary", className = "", ...props }: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-300 disabled:pointer-events-none disabled:opacity-50";
    const variants = {
        primary: "bg-neutral-900 text-white hover:bg-neutral-800 active:scale-[0.98]",
        secondary: "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 active:scale-[0.98]",
        ghost: "bg-transparent text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;