import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { userSchema, User } from "@/features/auth/schemas/userSchema";
import { storage } from "@/utils/storage";

export const useCheckAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const raw = storage.get("user");

        const result = userSchema.safeParse(raw);

        if (result.success) {
            setUser(result.data);
        } else {
            storage.remove("user");
            storage.remove("token");
            router.replace("/auth");
        }

        setIsLoading(false);
    }, []);

    return { user, isLoading };
};
