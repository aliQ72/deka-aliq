"use client";

import {useEffect, useState} from "react";
import {Text, Avatar} from "@/components/ui";
import {storage} from "@/utils/storage";
import {User} from "@/features/auth/schemas/userSchema";
import styles from "./WelcomeMessage.module.scss";

export const WelcomeMessage = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const userData = storage.get("user");
        if (userData) {
            setUser(userData);
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <Text as="h1">Welcome to the Dashboard 👋</Text>
            {user && (
                <div className={styles.userInfo}>
                    <Avatar src={user.picture?.medium} name={`${user.name?.first} ${user.name?.last}`} size="lg"/>
                    <Text className={styles.name}>
                        {user.name?.first} {user.name?.last}
                    </Text>
                </div>
            )}
        </div>
    );
};
