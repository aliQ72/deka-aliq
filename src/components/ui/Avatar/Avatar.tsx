"use client";

import React from "react";
import styles from "./Avatar.module.scss";
import {clsx} from "clsx";

interface AvatarProps {
    src?: string;
    alt?: string;
    name?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({src, alt, name, size = "md", className}) => {
    const fallback = name ? name[0].toUpperCase() : "?";

    return (
        <div
            className={clsx(
                styles.avatar,
                styles[size],
                "flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-semibold overflow-hidden",
                className
            )}
        >
            {src ? (
                <img src={src} alt={alt || "avatar"} className="w-full h-full object-cover"/>
            ) : (
                <span>{fallback}</span>
            )}
        </div>
    );
};

export default Avatar;
