"use client";

import React, {ButtonHTMLAttributes, forwardRef} from "react";
import {clsx} from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, children, ...props}, ref) => {
        return (
            <button
                ref={ref}
                {...props}
                className={clsx(styles.button, className, ' rounded-lg bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700')}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
