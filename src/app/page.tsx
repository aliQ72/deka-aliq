"use client";

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useCheckAuth} from "@/features/auth/hooks/useCheckAuth";

export default function Home() {
    const {user, isLoading} = useCheckAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading) {
            router.replace(user ? "/dashboard" : "/auth");
        }
    }, [user, isLoading]);

    return <div>در حال انتقال...</div>;
}
