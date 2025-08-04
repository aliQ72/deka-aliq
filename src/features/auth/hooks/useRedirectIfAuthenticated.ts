"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {storage} from "@/utils/storage";

export const useRedirectIfAuthenticated = () => {
    const router = useRouter();

    useEffect(() => {
        const user = storage.get("user");
        if (user) {
            router.replace("/dashboard");
        }
    }, [router]);
};
