"use client";

import React, {ButtonHTMLAttributes, forwardRef} from "react";
import {clsx} from "clsx";
import styles from "./Button.module.scss";

type ButtonVariant =
    | 'info'
    | 'danger'
    | 'warning'
    | 'outline'
    | 'outline-info'
    | 'outline-danger'
    | 'outline-warning';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
    info: 'bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    warning: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500',
    outline: 'bg-transparent border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white focus:ring-sky-500',
    'outline-info': 'bg-transparent border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white focus:ring-sky-500',
    'outline-danger': 'bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white focus:ring-red-500',
    'outline-warning': 'bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white focus:ring-amber-500',
};


const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, children, variant = 'info', ...props}, ref) => {

        const baseStyles = 'rounded-lg px-5 py-2 text-sm leading-5 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

        return (
            <button
                ref={ref}
                {...props}
                className={clsx(
                    styles.button,
                    baseStyles,
                    variantClasses[variant],
                    className
                )}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
