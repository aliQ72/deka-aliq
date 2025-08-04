"use client";

import React, {forwardRef, InputHTMLAttributes} from "react";
import styles from "./Input.module.scss";
import {clsx} from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({label, error, ...props}, ref) => {
        return (
            <div className={styles.wrapper}>
                {label && <label className={clsx(styles.label, 'mb-2')}>{label}</label>}
                <input ref={ref}
                       className={clsx(styles.input, 'p-2 rounded-lg bg-white placeholder:via-gray-400 text-center')} {...props} />
                {error && <span className={styles.error}>{error}</span>}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
