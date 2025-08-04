"use client";

import {useState, useCallback} from "react";
import {User} from "@/features/auth/types/user";

export const useFetchUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    const fetchUser = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
            if (!res.ok) throw new Error("Network response not ok");

            const data = await res.json();
            const userData = data.results[0];
            setUser(userData);
            setLoading(false);

            return userData;
        } catch (err) {
            setError("خطا در دریافت اطلاعات");
            setLoading(false);
            return null;
        }
    }, []);

    return {fetchUser, loading, error, user};
};
