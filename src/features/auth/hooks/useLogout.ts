import {useRouter} from "next/navigation";
import {storage} from "@/utils/storage";

export const useLogout = () => {
    const router = useRouter();

    return () => {
        storage.remove("user");
        storage.remove("token");
        router.replace("/auth");
    };
};
