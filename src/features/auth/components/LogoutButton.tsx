"use client";

import {Button} from "@/components/ui";
import {useLogout} from "../hooks/useLogout";

const LogoutButton = () => {
    const logout = useLogout();

    return (
        <Button variant="outline-danger" className="text-red-600" onClick={logout}>
            خروج
        </Button>
    );
};

export default LogoutButton;
