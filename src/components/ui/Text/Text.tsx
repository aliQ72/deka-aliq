"use client";

import React, { ElementType, HTMLAttributes } from "react";
import styles from "./Text.module.scss";

interface TextProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    className?: string;
    children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ as: Tag = "p", className = "", children, ...rest }) => {
    return (
        <Tag className={`${styles.text} ${className}`} {...rest}>
            {children}
        </Tag>
    );
};

export default Text;
